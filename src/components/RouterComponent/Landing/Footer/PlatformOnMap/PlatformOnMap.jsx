import style from './PlatformOnMap.module.scss';

export const PlatformOnMap = () => (
  <div className={style.mapWrapper}>
    <iframe
      className={style.map}
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d795.7124144620262!2d37.59606848936668!3d55.660912351548475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab33226527d5f%3A0xd3caa201767272aa!2z0J7QtNC10YHRgdC60LDRjyDRg9C7LiwgMTAsINCc0L7RgdC60LLQsCwg0KDQvtGB0YHQuNGPLCAxMTcxNDk!5e0!3m2!1sru!2sua!4v1682403241765!5m2!1sru!2sua'
      width='420'
      height='200'
      allowFullScreen=''
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
    ></iframe>
  </div>
);
