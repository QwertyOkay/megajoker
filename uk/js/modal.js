(() => {
  const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      openModalBtn2: document.querySelector('[data-modal-open2]'),
      openModalBtn3: document.querySelector('[data-modal-open3]'),
      openModalBtn4: document.querySelector('[data-modal-open4]'),
      openModalBtn5: document.querySelector('[data-modal-open5]'),
    openModalBtn6: document.querySelector('[data-modal-open6]'),
    openModalBtn7: document.querySelector('[data-modal-open7]'),
    openModalBtn8: document.querySelector('[data-modal-open8]'),
      openModalBtn9: document.querySelector('[data-modal-open9]'),
      openModalBtn10: document.querySelector('[data-modal-open10]'),
      
      closeModalBtn: document.querySelector('[data-modal-close]'),
    closeModalBtnB: document.getElementById('modal_overlay_0'),
      closeModalBtn2: document.querySelector('[data-modal-close2]'),
    closeModalBtn2B: document.getElementById('modal_overlay_2'),
       closeModalBtn3: document.querySelector('[data-modal-close3]'),
    closeModalBtn3B: document.getElementById('modal_overlay_3'),
       closeModalBtn4: document.querySelector('[data-modal-close4]'),
    closeModalBtn4B: document.getElementById('modal_overlay_4'),
    closeModalBtn5: document.querySelector('[data-modal-close5]'),
    closeModalBtn5B: document.getElementById('modal_overlay_5'),
    closeModalBtn6: document.querySelector('[data-modal-close6]'),
    closeModalBtn6B: document.getElementById('modal_overlay_6'),
    closeModalBtn7: document.querySelector('[data-modal-close7]'),
    closeModalBtn7B: document.getElementById('modal_overlay_7'),
    closeModalBtn8: document.querySelector('[data-modal-close8]'),
    closeModalBtn8B: document.getElementById('modal_overlay_8'),
       closeModalBtn9: document.querySelector('[data-modal-close9]'),
    closeModalBtn9B: document.getElementById('modal_overlay_9'),

      modal: document.querySelector('[data-modal]'),
      modal2: document.querySelector('[data-modal2]'),
      modal3: document.querySelector('[data-modal3]'),
      modal4: document.querySelector('[data-modal4]'),
    modal5: document.querySelector('[data-modal5]'),
    modal6: document.querySelector('[data-modal6]'),
    modal7: document.querySelector('[data-modal7]'),
    modal8: document.querySelector('[data-modal8]'),
      modal9: document.querySelector('[data-modal9]'),
    };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtnB.addEventListener('click', toggleModal);
  
  refs.openModalBtn2.addEventListener('click', toggleModal2);
  refs.closeModalBtn2.addEventListener('click', toggleModal2);
  refs.closeModalBtn2B.addEventListener('click', toggleModal2);

  refs.openModalBtn3.addEventListener('click', toggleModal3);
  refs.closeModalBtn3.addEventListener('click', toggleModal3);
  refs.closeModalBtn3B.addEventListener('click', toggleModal3);

  refs.openModalBtn4.addEventListener('click', toggleModal4);
  refs.closeModalBtn4.addEventListener('click', toggleModal4);
  refs.closeModalBtn4B.addEventListener('click', toggleModal4);

  refs.openModalBtn5.addEventListener('click', toggleModal5);
  refs.closeModalBtn5.addEventListener('click', toggleModal5);
  refs.closeModalBtn5B.addEventListener('click', toggleModal5);

  refs.openModalBtn6.addEventListener('click', toggleModal6);
  refs.closeModalBtn6.addEventListener('click', toggleModal6);
  refs.closeModalBtn6B.addEventListener('click', toggleModal6);

  refs.openModalBtn7.addEventListener('click', toggleModal7);
  refs.closeModalBtn7.addEventListener('click', toggleModal7);
  refs.closeModalBtn7B.addEventListener('click', toggleModal7);

  refs.openModalBtn8.addEventListener('click', toggleModal8);
  refs.closeModalBtn8.addEventListener('click', toggleModal8);
  refs.closeModalBtn8B.addEventListener('click', toggleModal8);

  refs.openModalBtn9.addEventListener('click', toggleModal9);
  refs.closeModalBtn9.addEventListener('click', toggleModal9);
  refs.closeModalBtn9B.addEventListener('click', toggleModal9);
  
  

    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
  }
  
    function toggleModal2() {
      refs.modal2.classList.toggle('is-hidden2');
  }

   function toggleModal3() {
      refs.modal3.classList.toggle('is-hidden3');
  }

  function toggleModal4() {
    refs.modal4.classList.toggle('is-hidden4');
}

function toggleModal5() {
  refs.modal5.classList.toggle('is-hidden5');
  }
  
  function toggleModal6() {
  refs.modal6.classList.toggle('is-hidden6');
  }
  
    function toggleModal7() {
  refs.modal7.classList.toggle('is-hidden7');
  }
  
  function toggleModal8() {
  refs.modal8.classList.toggle('is-hidden8');
  }
  
  function toggleModal9() {
  refs.modal9.classList.toggle('is-hidden9');
}
  
  })();
