import style from './ModalWindow.module.scss';
import PropTypes from 'prop-types';

export const ModalWindow = ({ content, modalConfirmAction, closeModal }) => {
  const handleModalConfirm = () => {
    closeModal();
    modalConfirmAction();
  };

  return (
    <div className={style.modalOverlay}>
      <div className={style.modalBody}>
        <div className={style.modalContentWrapper}>
          <div className={style.modalContent}>{content}</div>
          <div className={style.modalBtnsGroup}>
            <button className={style.modalBtn} onClick={handleModalConfirm}>
              Подтвердить
            </button>
            <button
              className={style.modalBtn}
              onClick={() => closeModal()}
            >
              Отменить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalWindow.propTypes = {
  content: PropTypes.node,
  modalConfirmAction: PropTypes.func,
  closeModal: PropTypes.func,
};
