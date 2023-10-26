export default function About() {
    return <main>
        <div className="article-container">
            <article>
                <div className="article-header-sctn">
                    <ul>Categories</ul>
                    <span>Publication</span>
                    <h1>Story Title</h1>
                    <h2>Story description</h2>
                    <div className="author-snippet">
                        <p>Author Name and description</p>
                    </div>
                </div>
                <div className="hero-img-sctn" >
                    <figure>
                        <div>
                            <img src="https://imssource.com" alt="img alt text" />
                        </div>
                        <div>
                            <figcaption>Figure Caption</figcaption>
                        </div>
                    </figure>
                </div>
                <div className="key-points-sctn" >
                    <div className="key-points-header">Key Points</div>
                    <div className="key-points-list-container">
                        <p className="key-points-set-html">Inner set html ul list of key points</p>
                    </div>
                </div>
                <div className="body-sctn" >
                    <div className="body-intro-graf">
                        <p>Intro paragraph with unique styling</p>
                    </div>
                    <div className="body-set-html">
                        <p>Inner set html paragraphs and headers</p>
                    </div>
                </div>
            </article>
            <div className="related-stories-sctn">
                <ul>
                    <li>
                        Related Stories
                    </li>
                </ul>
            </div>
        </div>
    </main>;
}