import Modal from 'react-modal'

Modal.setAppElement('#root'); // 모달이 화면에 올라갈 HTML 엘리먼트를 설정

export default function ApplyModal({ isOpen, closeModal }){ 

return (
    <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
    >
        <div>
        <h2>모달 내용</h2>
        <button onClick={closeModal}>닫기</button>
        </div>
    </Modal>
    );
};
