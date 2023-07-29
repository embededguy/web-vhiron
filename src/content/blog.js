import React from "react";
import './blog.css';
import { Link } from "react-router-dom";

function Blog(){
    return(
        <>
    <div className="container pt-3">
        <h2>Blogs</h2>
        <div className="row2">
        <h3 id="p-heading">Trending Posts</h3>
        <div className="h-underline"></div>
          <Link to="/lorem-ipsum-dolor-sit-amet-consectetur">
            <article className="best-post">
              <div
                className="best-post-image"
                style={{
                  backgroundImage: `url("https://img.freepik.com/free-vector/people-showcasing-different-types-ways-access-news_53876-43017.jpg?w=740&t=st=1689914702~exp=1689915302~hmac=77aa522be188138ff173d63e3ea0962df1ff3b222745492081c87e417f1c05ab")`
                }}
              ></div>
              <div className="best-post-content">
                <div className="best-post-content-cat">videograper</div>
                <div className="best-post-content-title">
                  Lorem ipsum dolor sit amet, consectetur
                </div>
                <div className="best-post-content-sub">
                  Lorem Ipsum, masaüstü yayıncılık ve basın yayın sektöründe
                  kullanılan taklit yazı bloğu olarak tanımlanır. Lipsum,
                  oluşturulacak şablon ve taslaklarda içerik yerine geçerek yazı
                  bloğunu doldurmak için kullanılır.
                </div>
              </div>
            </article>
          </Link>
          <Link to="/lorem-ipsum-dolor-sit-amet-consectetur">
            <article className="best-post">
              <div
                className="best-post-image"
                style={{
                  backgroundImage: `url("https://img.freepik.com/free-vector/people-showcasing-different-types-ways-access-news_53876-43017.jpg?w=740&t=st=1689914702~exp=1689915302~hmac=77aa522be188138ff173d63e3ea0962df1ff3b222745492081c87e417f1c05ab")`
                }}
              ></div>
              <div className="best-post-content">
                <div className="best-post-content-cat">videograper</div>
                <div className="best-post-content-title">
                  Lorem ipsum dolor sit amet, consectetur
                </div>
                <div className="best-post-content-sub">
                  Lorem Ipsum, masaüstü yayıncılık ve basın yayın sektöründe
                  kullanılan taklit yazı bloğu olarak tanımlanır. Lipsum,
                  oluşturulacak şablon ve taslaklarda içerik yerine geçerek yazı
                  bloğunu doldurmak için kullanılır.
                </div>
              </div>
            </article>
          </Link>
          <Link to="/lorem-ipsum-dolor-sit-amet-consectetur">
            <article className="best-post">
              <div
                className="best-post-image"
                style={{
                  backgroundImage: `url("https://img.freepik.com/free-vector/people-showcasing-different-types-ways-access-news_53876-43017.jpg?w=740&t=st=1689914702~exp=1689915302~hmac=77aa522be188138ff173d63e3ea0962df1ff3b222745492081c87e417f1c05ab")`
                }}
              ></div>
              <div className="best-post-content">
                <div className="best-post-content-cat">videograper</div>
                <div className="best-post-content-title">
                  Lorem ipsum dolor sit amet, consectetur
                </div>
                <div className="best-post-content-sub">
                  Lorem Ipsum, masaüstü yayıncılık ve basın yayın sektöründe
                  kullanılan taklit yazı bloğu olarak tanımlanır. Lipsum,
                  oluşturulacak şablon ve taslaklarda içerik yerine geçerek yazı
                  bloğunu doldurmak için kullanılır.
                </div>
              </div>
            </article>
          </Link>
          <Link to="/lorem-ipsum-dolor-sit">
            <article className="post__card-2">
              <div className="post__card_-2">
                <div
                  className="post__card__image-2"
                  style={{
                    backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/ad9cb894970549.5e8f28eecdea8.jpg")`
                  }}
                ></div>
                <div>
                  <div className="post__card_meta-2">
                    <div className="post__card_cat">youtube</div>
                    <p className="post__card_title-2">Lorem ipsum dolor sit</p>
                    <p className="post__card_alttitle-2">
                      Lorem Ipsum, masaüstü yayıncılık ve basın yayın sektöründe
                      kullanılan...
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </Link>
          <Link to="/lorem-ipsum-dolor-sit">
            <article className="post__card-2">
              <div className="post__card_-2">
                <div
                  className="post__card__image-2"
                  style={{
                    backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/7fa56a51087311.5a227b15ad57a.jpg")`
                  }}
                ></div>
                <div>
                  <div className="post__card_meta-2">
                    <div className="post__card_cat">youtube</div>
                    <p className="post__card_title-2">Lorem ipsum dolor sit</p>
                    <p className="post__card_alttitle-2">
                      Lorem Ipsum, masaüstü yayıncılık ve basın yayın sektöründe
                      kullanılan...
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </Link>
          <Link to="/lorem-ipsum-dolor-sit">
            <article className="post__card-2">
              <div className="post__card_-2">
                <div
                  className="post__card__image-2"
                  style={{
                    backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/7c8a1e90624231.5e997520e9b9b.jpg")`
                  }}
                ></div>
                <div>
                  <div className="post__card_meta-2">
                    <div className="post__card_cat">youtube</div>
                    <p className="post__card_title-2">Lorem ipsum dolor sit</p>
                    <p className="post__card_alttitle-2">
                      Lorem Ipsum, masaüstü yayıncılık ve basın yayın sektöründe
                      kullanılan...
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        </div>
      </div>
        </>
    );
}
export default Blog;