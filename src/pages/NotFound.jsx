import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className="d-flex align-items-center justify-content-center bg-light p-5">
      <div className="text-center">
        <h1 className="display-4 fw-bold text-dark mb-3">Ошибка 404</h1>
        <p className="fs-5 text-secondary mb-2">Страница не найдена</p>
        <p className="text-muted mb-4">
          Неправильно набран адрес или такой страницы на сайте больше не существует.
        </p>
        <Link to="/" className="btn btn-primary btn-lg">
          Перейти на главную страницу
        </Link>
      </div>
    </div>
  )
}

export default NotFound
