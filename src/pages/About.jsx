import TestBd from "../components/testBd";

function About() {
  return (
    <>
      <div className="container my-5">
        <h1 className="text-center mb-4">О нас</h1>

        <div className="card shadow-sm mb-5">
          <div className="card-body">
            <h3 className="card-title">Наша история</h3>
            <p className="card-text">
							Всё началось с любви к музыке и желания дать каждому возможность прикоснуться к качественному звуку. Мы открыли магазин, где каждый — от новичка до профи — найдёт свою идеальную гитару. Мы собрали инструменты, в которых есть душа, характер и мощь настоящего рока.
            </p>
          </div>
        </div>

        <div className="row text-center mb-5">
          <h2 className="mb-4">Наша команда</h2>
          <div className="col-md-4 mb-3">
            <div className="card h-100">
              <img src="https://www.kieselguitars.com/_next/image?url=%2Fimages%2Fartists%2Fdevin-townsend-sig.jpg&w=640&q=100" className="card-img-top" alt="Team Member" />
              <div className="card-body">
                <h5 className="card-title">Devin Townsend</h5>
                <p className="card-text">CEO и основатель</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100">
              <img src="https://www.kieselguitars.com/_next/image?url=%2Fimages%2Fartists%2Fjessica-lynn.jpg&w=640&q=75" className="card-img-top" alt="Team Member" />
              <div className="card-body">
                <h5 className="card-title">Jessica Lynn</h5>
                <p className="card-text">Главный маркетолог</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100">
              <img src="https://www.kieselguitars.com/_next/image?url=%2Fimages%2Fartists%2Fdewa-budjana.jpg&w=640&q=75" className="card-img-top" alt="Team Member" />
              <div className="card-body">
                <h5 className="card-title">Dewa Budjana</h5>
                <p className="card-text">Технический директор</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-light p-5 rounded shadow-sm mb-5">
          <h2 className="mb-3">Наша миссия</h2>
          <p>
						Мы хотим, чтобы качественные гитары были доступны всем. Наша миссия — помочь вам найти инструмент, который вдохновляет. Мы не просто продаём гитары — мы живём ими. Поэтому в нашем магазине только лучшие инструменты, индивидуальный подход и забота о каждом клиенте.
          </p>
        </div>

        <TestBd />
      </div>
    </>
  );
}

export default About;
