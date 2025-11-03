<script setup lang="ts"></script>

<template>
  <header class="app-navbar">
    <div class="app-navbar__left">
      <div class="app-navbar__title">
        <div class="logo__icon-switch"></div>
        <div class="logo__icon-app"></div>
        <span class="title__text">Tuyển Dụng</span>
      </div>

      <div class="search-box">
        <i class="fas fa-search search-box__icon"></i>
        <input
          type="text"
          placeholder="Tìm kiếm tin tuyển dụng, ứng viên, nhân tài..."
          class="search-box__input"
        />
      </div>
    </div>

    <div class="app-navbar__right">
      <div class="app-navbar__item">
        <div class="icon icon__global"></div>
        <div class="app-navbar__item-text">Website tuyển dụng</div>
      </div>
      <div class="app-navbar__item">
        <div class="icon icon__announcement"></div>
      </div>
      <div class="app-navbar__item">
        <div class="icon__cart"></div>
      </div>
      <div class="app-navbar__item">
        <div class="icon__message"></div>
      </div>
      <div class="app-navbar__item">
        <div class="icon icon__bell"></div>
      </div>
      <div class="app-navbar__item">
        <div class="icon icon__help"></div>
      </div>
      <div class="app-navbar__item">
        <div class="icon icon__more-menu"></div>
      </div>
      <div class="app-navbar__item">
        <div class="icon icon__knowledge"></div>
      </div>

      <div class="app-navbar__user-avatar">
        <img
          src="https://via.placeholder.com/32/FF6347/FFFFFF?text=U"
          alt="User"
          class="app-navbar__avatar-image"
        />
      </div>
    </div>
  </header>
</template>

<style scoped>
.app-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  background-color: var(--ms-white);
  padding: 0 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.app-navbar__left {
  display: flex;
  align-items: center;
  gap: 32px;
}

.app-navbar__title {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 18px;
  font-weight: 700;
  color: var(--ms-secondary-text-emphasis);
  cursor: pointer;
}

.app-navbar__search-input::placeholder {
  color: #a0a0a0;
}

.app-navbar__right {
  display: flex;
  align-items: center;
  gap: 4px;
}

.app-navbar__item {
  display: flex;
  align-items: center;
  color: var(--ms-secondary-text-emphasis);
  padding: 8px;
  border-radius: 32px;
  transition: background-color 0.2s;
  cursor: pointer;
}

.app-navbar__item-text {
  color: var(--ms-secondary-text-emphasis);
  font-size: 14px;
  padding-left: 4px;
}

.app-navbar__item:hover {
  background-color: #e9ecef;
}

.app-navbar__user-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--ms-secondary-bg);
  border: 2px solid var(--ms-secondary-bg-subtle);
  cursor: pointer;
}

.app-navbar__avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>
