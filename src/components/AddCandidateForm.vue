<script setup></script>

<template>
  <div class="popup">
    <div class="popup__overlay">
      <div class="popup__content">
        <div class="popup__header">
          <div class="popup__header--title">Thêm ứng viên</div>
          <div class="popup__header--close">
            <div class="icon icon__close"></div>
          </div>
        </div>
        <div class="popup__body">
          <div class="input__group">
            <div class="input__label"></div>
            <input type="text" />
          </div>
          <div class="input__group--double">
            <div class="input__group"></div>
            <div class="input__group"></div>
          </div>
        </div>
        <div class="popup__footer">
          <button type="button">Hủy</button>
          <button type="button">Lưu</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.popup__overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.popup__content {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 6px;
  width: 500px;
  height: 95%;
}

.popup__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 16px 0 24px;
}

.popup__header--title {
  font-size: 24px;
  font-weight: 700;
}

.popup__body {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  flex: 1;
}

.popup__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 9px 24px;
  border-top: 1px solid #dddde4;
}
</style>
