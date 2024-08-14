// pages/blog/[slug]/index.js
import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
import { posts } from '../../../data/posts';

export const getStaticPaths = async () => {
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const post = posts.find((post) => post.slug === params.slug);

  return {
    props: {
      post,
    },
  };
};

const BlogPost = ({ post }) => {
  const router = useRouter();

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
        <Head>
            <title>{post.title}</title>
            <meta name="description" content="Description of the home page" />
        </Head>
        <section className="custom-header" style={{ background: "url('/img/blog-header.jpg')" }}></section>
        <section className="mb-4" style={{ marginTop: '-120px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-3">
                        <div>
                            <div className="title text-left">
                                <h2 className="text-main fs-2 fw-bold my-4">{post.title}</h2>
                            </div>
                            <div>
                                <Image src={post.image} className="w-100" alt={post.title} width={1296} height={607} />
                            </div>
                            <div className="py-3">
                                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    
  );
};

export default BlogPost;
