import { Footer } from "./Footer";
import { GithubLink } from "./GithubCorner";
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="absolute right-4 top-4">
        <GithubLink />
      </div>
      <div className="w-full h-screen grid items-center justify-center">
        <div />
        <div>{children}</div>
        <div className="self-end">
          <Footer />
        </div>
      </div>
    </>
  );
}
