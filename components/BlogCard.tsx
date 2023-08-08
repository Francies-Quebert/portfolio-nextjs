import Link from 'next/link';

const BlogCard = ({ title, excerpt, slug }: any) => {
    return (
        <Link href={`/page/blog/${slug}`} className="block border border-gray-300 rounded-md p-4 mb-4 hover:bg-gray-100">

            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-gray-500">{excerpt}</p>

        </Link>
    );
};

export default BlogCard