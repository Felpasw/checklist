export default function footer(){
  return(
  <footer className="footer" $footer-color>
    <div className="columns">
        <div className="column is-2 is-offset-4">
          <figure className="image is-32x32">
            <a href="https://www.instagram.com/lilfeefdude" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384073.png" alt="" />
            </a>
          </figure>
      </div>
      <div className="column is-2">
          <figure className="image is-32x32">
            <a href="https://wa.me/5541987877048" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384079.png" alt="" />
            </a>
          </figure>
      </div>
      <div className="column is-2">
          <figure className="image is-32x32">
            <a href="https://twitter.com/lilfeef" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384075.png" alt="" />
            </a>
          </figure>
      </div>
  </div>
  <div className="content has-text-centered">
    <p>
      <strong> Made by: </strong> <a href="https://github.com/felpasw">Felipe Cavalcante Lacerda</a>.
      </p>
    </div>
</footer>
)
}