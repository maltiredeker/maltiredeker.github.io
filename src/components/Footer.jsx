export default function Footer() {
  return (
    <footer className="bg-(--dark-blue) py-4 -mt-5">
      <div className="container mx-auto text-center">
        <p className="!text-[12px] md:!text-[16px]">
          &copy; {new Date().getFullYear()} Malti Redeker. All rights reserved.
        </p>
      </div>
    </footer>
  );
}