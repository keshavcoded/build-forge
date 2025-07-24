import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterXFill,
} from "@remixicon/react";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center py-4 border-neutral-300 border-t-1">
        <div className="flex space-x-6 mb-2">
          <a
            href="www.x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit X"
          >
            <RiTwitterXFill />
          </a>
          <a
            href="www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Insta"
          >
            <RiInstagramLine />
          </a>
          <a
            href="www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Facebook"
          >
            <RiFacebookFill />
          </a>
        </div>
        <p className="text-sm ">
          &copy; {new Date().getFullYear()} Build Forge. All rights are
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
