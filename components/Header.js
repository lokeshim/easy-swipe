// components/Header.js
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg shadow-sm  bg-dark" style={{ background: 'linear-gradient(45deg,#f6ebe7  68%,#003364  50%)' }}>
                <div className="container">
                    <Link className="navbar-brand right1" href="#"> 
                        <Image src="/img/logo.png" className="img-fluid logo" alt="Logo" style={{ maxHeight: '60px' }}  width={145} height={60} />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav   me-auto ps-md-5 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link href="/" passHref className="nav-link text-white right12" aria-current="page">Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about" passHref className="nav-link right14">About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/service" passHref className="nav-link right16">Service
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/blog" passHref className="nav-link right18">Blog
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/calculator" passHref className="nav-link right18">Calculator
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact" passHref className="nav-link right20">Contact us
                                </Link>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <a type="button" className="left20 btn btn-white btn-primary d-md-block d-none" data-bs-target="#exampleModal" data-bs-toggle="modal">
                                Enquire Now
                            </a>
                        </span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
