<script setup lang="ts"></script>

<template>
  <div class="app-sidebar">
    <div class="app-sidebar__list">
      <div class="app-sidebar__item">
        <div class="icon icon__recruitment-new"></div>
        <div class="app-sidebar__item-text">Tin tuyển dụng</div>
      </div>
      <div class="app-sidebar__item">
        <div class="icon icon__candidates"></div>
        <div class="app-sidebar__item-text">Ứng viên</div>
      </div>
      <div class="app-sidebar__item">
        <div class="icon icon__calender"></div>
        <div class="app-sidebar__item-text">Lịch</div>
      </div>
      <div class="app-sidebar__item">
        <div class="icon icon__potential-pool"></div>
        <div class="app-sidebar__item-text">Kho tiềm năng</div>
      </div>
      <div class="app-sidebar__item">
        <div class="icon icon__campaign"></div>
        <div class="app-sidebar__item-text">Chiến dịch tuyển dụng</div>
      </div>
      <div class="app-sidebar__item">
        <div class="icon icon__task"></div>
        <div class="app-sidebar__item-text">Công việc</div>
      </div>
      <div class="app-sidebar__item">
        <div class="icon icon__ai-marketing"></div>
        <div class="app-sidebar__item-text">aiMarketing</div>
      </div>
      <div class="app-sidebar__item">
        <div class="icon icon__chat-bubble"></div>
        <div class="app-sidebar__item-text">Trao đổi với ứng viên</div>
      </div>
      <div class="app-sidebar__item">
        <div class="icon icon__report"></div>
        <div class="app-sidebar__item-text">Báo cáo</div>
      </div>
      <div class="app-sidebar__item">
        <div class="icon icon__settings"></div>
        <div class="app-sidebar__item-text">Thiết lập</div>
      </div>
      <div class="app-sidebar__item">
        <div class="icon__knowledge"></div>
        <div class="app-sidebar__item-text">Kiến thức hữu ích</div>
      </div>
    </div>

    <div class="app-sidebar__item app-sidebar__item--collapse">
      <i class="fa-solid fa-chevron-left"></i>
      <div class="app-sidebar__item-text">Thu gọn</div>
    </div>
  </div>
</template>

<style scoped>
.app-sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 233px;
  height: 100%;
  background:
    linear-gradient(
      to bottom,
      rgb(30, 38, 51),
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.2)
    ),
    url('@/assets/images/background.svg') no-repeat center center;
  padding: 32px 0 16px 0;
  flex-shrink: 0;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  font-weight: 600;
}

.app-sidebar__item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 12px;
  margin: 0 12px 12px 12px;
  gap: 8px;
  font-size: 14px;
  color: var(--ms-gray-400);
  cursor: pointer;
}

.app-sidebar__item > .icon {
  background-color: var(--ms-gray-400);
}

.app-sidebar__item:hover {
  border-radius: 4px;
  background-color: var(--ms-border-color-translucent);
}

.app-sidebar__item--collapse {
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  align-items: center;
  height: 40px;
  border-radius: 4px;
  background-color: var(--ms-border-color-translucent);
  padding: 8px;
  margin: 0 12px;
}
</style>
