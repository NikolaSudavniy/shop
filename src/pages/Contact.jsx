function Contact() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Связаться с нами</h1>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="p-4 shadow-sm rounded bg-light h-100">
            <h4>Контактная информация</h4>
            <p><strong>Email:</strong> info@example.com</p>
            <p><strong>Телефон:</strong> +38 (098) 123-45-67</p>
            <p><strong>Адрес:</strong> Майдан Незалежності, Київ</p>
            <div className="mt-3">
              <h5>Мы на карте:</h5>
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.529164388427!2d30.5234004!3d50.4501003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce5c6c0807f1%3A0x8f6384bc0eb4ec4a!2z0JzQvtCz0LDRgNC90LjQuiDQn9GA0L7QvNC40YDRjNC60LAg0JrRgNCw0L3QvdGL0LU!5e0!3m2!1suk!2sua!4v1714822747645!5m2!1suk!2sua"
                  title="Карта Майдан Незалежності"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="p-4 shadow-sm rounded bg-white h-100 border">
            <h4>Напишите нам</h4>
            <form>
              <div className="mb-3">
                <label className="form-label">Имя</label>
                <input type="text" className="form-control" placeholder="Ваше имя" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Ваш email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Сообщение</label>
                <textarea className="form-control" rows="4" placeholder="Ваше сообщение"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Отправить</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
