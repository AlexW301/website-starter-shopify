import Link from "next/link";

const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Company Site",
    href: "https://www.asrpromedia.com/",
  },
  {
    name: "Portfolio",
    href: "https://alexwaller.dev/",
  },
];

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="">
      <div className="px-4 py-12 mx-auto overflow-hidden max-w-containerxl sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center">
          {navigation.map((item, i) => (
            <div key={i} className="px-6 py-2">
              <Link className="text-gray-500 duration-300 hover:text-gray-900" href={item.href}>
              {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <p className="mt-8 text-sm text-center text-gray-500">&copy; {year} ASR Media & IT, All Rights Reserved.</p>
      </div>
    </footer>
  );
}