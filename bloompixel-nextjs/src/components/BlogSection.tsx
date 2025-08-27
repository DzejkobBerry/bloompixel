'use client';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Trendy w projektowaniu stron w 2023 roku",
    excerpt: "Poznaj najnowsze trendy w projektowaniu stron internetowych, które zdominują rok 2023. Od minimalizmu po neomorfizm - wszystko, co powinieneś wiedzieć.",
    category: "Design",
    date: "15 czerwca 2023",
    image: "/images/blog/post1.jpg",
    slug: "trendy-projektowanie-2023"
  },
  {
    id: 2,
    title: "Optymalizacja SEO dla początkujących",
    excerpt: "Kompletny przewodnik po podstawach SEO dla osób rozpoczynających przygodę z pozycjonowaniem. Dowiedz się, jak poprawić widoczność swojej strony w wyszukiwarkach.",
    category: "SEO",
    date: "10 czerwca 2023",
    image: "/images/blog/post1.jpg",
    slug: "seo-dla-poczatkujacych"
  },
  {
    id: 3,
    title: "Najlepsze frameworki JavaScript w 2023",
    excerpt: "Przegląd najpopularniejszych frameworków JavaScript, które warto znać w 2023 roku. Porównanie React, Vue, Angular i innych narzędzi dla front-end developerów.",
    category: "Development",
    date: "5 czerwca 2023",
    image: "/images/blog/post1.jpg",
    slug: "frameworki-javascript-2023"
  }
];

export default function BlogSection() {
  return (
    <section className="blog fade-in" id="blog">
      <div className="container">
        <div className="section-header">
          <h2>Blog i <span className="highlight">artykuły</span></h2>
          <p className="section-subtitle">Najnowsze wpisy i porady ze świata web developmentu</p>
        </div>
        
        <div className="construction-notice enhanced-simple">
          <h3>Tworzymy dla Ciebie wartościowe treści!</h3>
          <p>Nasi eksperci pracują nad serią artykułów o najnowszych trendach i technologiach webowych.</p>
        </div>
        
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <div className="blog-category">{post.category}</div>
              </div>
              <div className="blog-content">
                <div className="blog-date">{post.date}</div>
                <h3><a href={`#${post.slug}`}>{post.title}</a></h3>
                <p>{post.excerpt}</p>
                <a href={`#${post.slug}`} className="read-more">
                  Czytaj więcej <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="blog-more">
          <a href="#" className="btn btn-primary">Zobacz wszystkie artykuły</a>
        </div>
      </div>

      <style jsx>{`
        .blog {
          padding: 100px 0;
          background: #f8f9fa;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 15px;
        }

        .highlight {
          background: linear-gradient(45deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }

        .construction-notice {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 40px;
          border-radius: 15px;
          text-align: center;
          margin-bottom: 60px;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
        }

        .construction-notice h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 15px;
        }

        .construction-notice p {
          font-size: 1rem;
          opacity: 0.9;
          margin: 0;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .blog-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .blog-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .blog-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .blog-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .blog-card:hover .blog-image img {
          transform: scale(1.1);
        }

        .blog-category {
          position: absolute;
          top: 15px;
          left: 15px;
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .blog-content {
          padding: 30px;
        }

        .blog-date {
          color: #999;
          font-size: 0.9rem;
          margin-bottom: 15px;
        }

        .blog-content h3 {
          margin-bottom: 15px;
        }

        .blog-content h3 a {
          color: #333;
          text-decoration: none;
          font-size: 1.3rem;
          font-weight: 600;
          line-height: 1.4;
          transition: color 0.3s ease;
        }

        .blog-content h3 a:hover {
          color: #667eea;
        }

        .blog-content p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .read-more {
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .read-more:hover {
          color: #764ba2;
          gap: 12px;
        }

        .read-more i {
          font-size: 0.9rem;
          transition: transform 0.3s ease;
        }

        .read-more:hover i {
          transform: translateX(5px);
        }

        .blog-more {
          text-align: center;
        }

        .btn {
          display: inline-block;
          padding: 15px 30px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          font-size: 1rem;
        }

        .btn-primary {
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
        }

        @media (max-width: 768px) {
          .blog {
            padding: 60px 0;
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .blog-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .construction-notice {
            padding: 30px 20px;
          }

          .blog-content {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
}