import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from '@/components/Layout';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center bg-background pt-20">
        <div className="container-luxury text-center">
          <span className="text-luxury-caps text-gold mb-4 block">Error 404</span>
          <h1 className="font-serif text-6xl md:text-8xl text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10">
            The page you're looking for seems to have wandered off. 
            Let us guide you back to sweeter destinations.
          </p>
          <Link to="/" className="btn-luxury">
            Return Home
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
