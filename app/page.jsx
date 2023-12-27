import Link from "next/link";

const page = () => {
  return (
    <main>
      <div className="nav">
        <div className="nav-name">
          <p className="nav-txt">rudr</p>
        </div>
        <div>
          <nav className=""></nav>
        </div>
        <div>
          <Link href="mailto:rudr26@proton.me" className="mail-link">
            <p className="mail-btn">Contact</p>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default page;
