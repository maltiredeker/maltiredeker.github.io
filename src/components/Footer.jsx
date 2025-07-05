export default function Footer() {
  return (
    <footer className="bg-(--dark-blue) py-2">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Malti Redeker. All rights reserved.
        </p>
        <p className="text-sm">
          Built with React + Vite and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}