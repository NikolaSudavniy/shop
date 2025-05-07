import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProductContext } from '../../context/ProductContext';
import { useImageContext } from '../../context/ImageContext';

export default function ProductForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useProductContext();
  const { imageList, getFullPath } = useImageContext();

  const isEditing = Boolean(id);
  const editingProduct = state.products.find(p => p.id === Number(id));

  const [form, setForm] = useState({ title: '', price: '', image: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isEditing && editingProduct) {
      setForm({ 
        title: editingProduct.title, 
        price: String(editingProduct.price),
        image: editingProduct.image || '',
      });
    }
  }, [isEditing, editingProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const selectImage = (img) => {
    setForm(prev => ({ ...prev, image: img }));
    setErrors(prev => ({ ...prev, image: '' }));
    document.querySelector('#imageSelectModal .btn-close')?.click();
  };

  const validate = () => {
    const { title, price, image } = form;
    const newErrors = {};

    if (!title.trim()) newErrors.title = 'Наименование обязательно';
    if (!price.trim()) newErrors.price = 'Цена обязательна';
    else if (!/^\d+$/.test(price.trim())) newErrors.price = 'Введите только цифры';
    if (!image) newErrors.image = 'Выберите изображение';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const payload = {
      id: editingProduct ? editingProduct.id : Date.now(),
      title: form.title.trim(),
      price: Number(form.price),
      image: form.image,
    };

    dispatch({
      type: isEditing ? 'UPDATE_PRODUCT' : 'ADD_PRODUCT',
      payload,
    });

    navigate('/admin/adminpanel');
  };

  return (
    <div className="container mt-4">
      <h2>{isEditing ? 'Редактировать товар' : 'Добавить товар'}</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Наименование</label>
          <input
            type="text"
            name="title"
            id="title"
            className={`form-control ${errors.title ? 'is-invalid' : ''}`}
            placeholder="Наименование товара"
            value={form.title}
            onChange={handleChange}
          />
          {errors.title && <div className="invalid-feedback">{errors.title}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Цена</label>
          <input
            type="text"
            name="price"
            id="price"
            className={`form-control ${errors.price ? 'is-invalid' : ''}`}
            placeholder="Цена товара"
            value={form.price}
            onChange={handleChange}
          />
          {errors.price && <div className="invalid-feedback">{errors.price}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Изображение</label>
          <div className="d-flex flex-column gap-3 align-items-start">
            <button
              type="button"
              className="btn btn-outline-secondary"
              data-bs-toggle="modal"
              data-bs-target="#imageSelectModal"
            >
              Выбрать изображение
            </button>
            {errors.image && <div className="text-danger">{errors.image}</div>}
            {form.image && (
              <img
                src={getFullPath(form.image)}
                alt="Превью"
                style={{ maxWidth: '100px', borderRadius: '6px' }}
              />
            )}
          </div>
        </div>

        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary">
            {isEditing ? 'Сохранить' : 'Добавить'}
          </button>
          <button 
            type="button" 
            className="btn btn-secondary" 
            onClick={() => navigate('/admin/adminpanel')}>
            Отмена
          </button>
        </div>
      </form>

      {/* Модалка выбора изображения */}
      <div
        className="modal fade"
        id="imageSelectModal"
        tabIndex="-1"
        aria-labelledby="imageSelectModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="imageSelectModalLabel">Выберите изображение</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
            </div>
            <div className="modal-body">
              <div className="row">
                {imageList.map((img) => (
                  <div className="col-4 col-md-3 mb-3 d-flex flex-column justify-content-end align-items-center" key={img}>
                    <img
                      src={getFullPath(img)}
                      alt="preview"
                      className="img-fluid"
                      style={{ cursor: 'pointer', width: '50%' }}
                      onClick={() => selectImage(img)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
