import React from 'react';
import style from './App.module.css';
import Header from '@component/Header';
import Menu from '@component/Menu';
import { useMenuState } from '@/hooks/useMenuState';
import Popup from '@/Components/popup';
import { useModalState } from '@/hooks/useModalState';
export const App = () => {
  const { isActive, switchActiveState } = useMenuState();
  const { closeModal, isModalVisible, openModal } = useModalState();

  return (
    <div className={style.app}>
      <Header
        switchMenuState={switchActiveState}
        isMenuActive={isActive}
        openPopup={openModal}
      />
      <div className={style.invisibleArea}></div>
      <Menu isActive={isActive} openPopup={openModal} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
        doloremque. Amet quidem provident incidunt ipsam, qui laudantium sunt
        quaerat deserunt fugit eveniet, eos odit ducimus ad vero possimus quasi
        dolore tempora quos maiores porro explicabo cupiditate, quisquam facere.
        Necessitatibus atque in ut voluptatem. Cupiditate dolores maiores nulla
        eaque vero exercitationem nesciunt ad fugit, inventore blanditiis,
        tempora harum, perferendis incidunt ex ratione aliquam deleniti. Quidem
        voluptatum facilis quia placeat modi officia dolores voluptates
        molestiae, explicabo sequi laborum beatae? Praesentium, suscipit. Sequi
        amet odit nulla fugit quidem voluptatum unde consequuntur molestias
        saepe ut fugiat quibusdam sit quaerat minima incidunt ducimus, modi
        dignissimos corrupti enim, in error! Magnam exercitationem voluptates
        reprehenderit perspiciatis saepe est autem temporibus ut voluptatem
        recusandae. Provident, sequi deserunt veniam cumque fugit voluptates qui
        labore numquam voluptatem corrupti voluptate dolores quasi similique
        obcaecati eaque porro placeat eos nesciunt, optio dignissimos
        distinctio, doloribus aperiam dolorem! Praesentium magni, ullam dolorem
        porro voluptas veniam quam facilis est accusantium debitis, omnis,
        accusamus nemo minima. Ipsa obcaecati tempore modi, quaerat vero quas,
        harum facere mollitia odit adipisci vel dolorem hic at eaque
        voluptatibus eligendi ut deleniti id iusto dolor in pariatur. Enim illo
        esse eveniet soluta amet vel delectus error, fugiat labore tenetur porro
        ut!
      </p>
      <Popup closeModal={closeModal} isModalOpen={isModalVisible} />
    </div>
  );
};
