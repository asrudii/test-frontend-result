import Footer from '../Footer';
import Loading from '../Loading';
import Navbar from '../Navbar';

export default function Layout({ children, loading }) {
  return (
    <div className="flex flex-col min-h-screen">
      {loading && <Loading />}
      <Navbar />
      <main className="flex flex-1 p-5 md:p-10 bg-blue-50">{children}</main>
      <Footer />
    </div>
  );
}
