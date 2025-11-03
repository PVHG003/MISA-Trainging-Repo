<script setup>
import { ref } from 'vue'
import AddCandidateForm from '@/components/AddCandidateForm.vue'

const isFormOpen = ref(false)

function handleChangeModalState() {
  isFormOpen.value = !isFormOpen.value
  console.log(isFormOpen.value)
}
</script>

<template>
  <div class="candidates-page">
    <div class="candidate-header">
      <div class="candidate-header__left">
        <div class="candidate-header__title">Ứng viên</div>
      </div>
      <div class="candidate-header__right">
        <div class="candidate-header__button">
          <div class="candidate-header__button--add-candidate" @click="handleChangeModalState">
            <div class="icon icon__add"></div>
            <span>Thêm ứng viên</span>
          </div>
          <div class="candidate-header__button--dropdown">
            <div class="icon icon__chevron-down"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="candidates-page__body">
      <div class="candidates-page__toolbar">
        <div class="search-box">
          <i class="fa-solid fa-search search-box__icon"></i>
          <input
            type="text"
            placeholder="Tìm kiếm nhanh trong danh sách"
            class="search-box__input"
          />
        </div>
        <div class="toolbar__button">
          <div class="icon icon__filter"></div>
        </div>
        <div class="toolbar__button">
          <div class="icon icon__export"></div>
        </div>
        <div class="toolbar__button">
          <div class="icon icon__interaction-history"></div>
        </div>
        <div class="toolbar__button">
          <div class="icon icon__settings"></div>
        </div>
      </div>
      <div class="candidates-page__table">
        <div class="candidates-table">
          <table class="candidates-table__element">
            <thead class="candidates-table__header">
              <tr class="candidates-table__row">
                <th class="candidates-table__cell candidates-table__cell--checkbox">
                  <input type="checkbox" class="candidates-table__checkbox-all" />
                </th>

                <th class="candidates-table__cell candidates-table__cell--name">Họ tên</th>
                <th class="candidates-table__cell">Số điện thoại</th>
                <th class="candidates-table__cell">Email</th>
                <th class="candidates-table__cell">Chiến dịch tuyển dụng</th>
                <th class="candidates-table__cell">Vị trí tuyển dụng</th>

                <th class="candidates-table__cell">Vòng tuyển dụng</th>
                <th class="candidates-table__cell">Đánh giá</th>
                <th class="candidates-table__cell">Ngày ứng tuyển</th>
                <th class="candidates-table__cell">Nguồn ứng viên</th>
                <th class="candidates-table__cell">Trình độ đào tạo</th>
                <th class="candidates-table__cell">Nơi đào tạo</th>
                <th class="candidates-table__cell">Chuyên ngành</th>
                <th class="candidates-table__cell">Nơi làm việc gần đây nhất</th>
                <th class="candidates-table__cell">Nhân sự khai thác</th>
                <th class="candidates-table__cell">Đơn vị sử dụng</th>
                <th class="candidates-table__cell">Phù hợp với chân dung</th>
                <th class="candidates-table__cell">Khu vực</th>
                <th class="candidates-table__cell">Người giới thiệu</th>
                <th class="candidates-table__cell">Thông tin tiếp nhận</th>
                <th class="candidates-table__cell">Thuộc kho tiềm năng</th>
                <th class="candidates-table__cell">Tài khoản cổng ứng viên</th>
                <th class="candidates-table__cell">Thẻ</th>
                <th class="candidates-table__cell">Trạng thái</th>
                <th class="candidates-table__cell">Giới tính</th>
                <th class="candidates-table__cell">Ngày sinh</th>
                <th class="candidates-table__cell">Địa chỉ</th>
                <th class="candidates-table__cell">Lý do loại</th>
                <th class="candidates-table__cell">Cộng tác viên</th>
                <th class="candidates-table__cell">Ngày tiếp nhận</th>
                <th class="candidates-table__cell">Trạng thái mời nhận việc</th>

                <th class="candidates-table__cell candidates-table__cell--sticky-action"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in 100" :key="i" class="candidates-table__row">
                <td class="candidates-table__cell candidates-table__cell--checkbox">
                  <input type="checkbox" class="candidates-table__checkbox-row" />
                </td>

                <td class="candidates-table__cell candidates-table__cell--name">
                  <div class="candidates-table__data-wrapper">
                    <div class="candidates-table__avatar candidates-table__avatar--red">TL</div>
                    <span>Nguyễn Thế Lực</span>
                  </div>
                </td>

                <td class="candidates-table__cell">0987654321</td>
                <td class="candidates-table__cell">luc.nguyenthe@example.com</td>
                <td class="candidates-table__cell">Chiến dịch Marketing Q4</td>
                <td class="candidates-table__cell">Chuyên viên Marketing</td>

                <td class="candidates-table__cell">Phỏng vấn</td>
                <td class="candidates-table__cell">4/5</td>
                <td class="candidates-table__cell">15/10/2025</td>
                <td class="candidates-table__cell">Website</td>
                <td class="candidates-table__cell">Đại học</td>
                <td class="candidates-table__cell">Học viện Tài chính</td>
                <td class="candidates-table__cell">Marketing</td>
                <td class="candidates-table__cell">Misa Tech</td>
                <td class="candidates-table__cell">Nguyễn Thanh</td>
                <td class="candidates-table__cell">Phòng Marketing</td>
                <td class="candidates-table__cell">Chưa phù hợp</td>
                <td class="candidates-table__cell">Hà Nội</td>
                <td class="candidates-table__cell">Không</td>
                <td class="candidates-table__cell">Email</td>
                <td class="candidates-table__cell">Không</td>
                <td class="candidates-table__cell">Không có</td>
                <td class="candidates-table__cell">Tài năng trẻ</td>
                <td class="candidates-table__cell">Chờ phỏng vấn</td>
                <td class="candidates-table__cell">Nam</td>
                <td class="candidates-table__cell">10/05/1998</td>
                <td class="candidates-table__cell">TP.HCM</td>
                <td class="candidates-table__cell">N/A</td>
                <td class="candidates-table__cell">Không</td>
                <td class="candidates-table__cell">10/10/2025</td>
                <td class="candidates-table__cell">Đang chờ</td>

                <td class="candidates-table__cell candidates-table__cell--sticky-action">
                  <i class="fas fa-pen candidates-table__action-icon"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="candidates-page__pagination">
        <div class="pagination__left">
          <div class="pagination__summary">Tổng: 5369 bản ghi</div>
        </div>
        <div class="pagination__right">
          <div class="pagination__text">Số bản ghi/trang</div>
          <select>
            <option value="15">15</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <div class="pagination__info-range">
            <span> 1 - 25 bản ghi </span>
          </div>
          <div class="pagination__controller">
            <div class="icon icon__chevron-down"></div>
            <div class="icon icon__chevron-down"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <add-candidate-form v-if="isFormOpen" @close="handleChangeModalState" />
</template>

<style scoped>
/* candidates-page */
.candidates-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.candidates-page__body {
  flex: 1;
  width: 100%;
  background-color: white;
  border: 1px solid var(--ms-border-color-translucent);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.candidates-page__toolbar {
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  margin-right: 16px;
}

.candidates-page__table {
  flex: 1;
  width: 100%;
  height: calc(100% - 60px);
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: #ced4da transparent;
}

.candidates-page__pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 60px;
  width: 100%;
  padding: 8px 16px;
  border-top: 1px solid var(--ms-border-color-translucent);
  flex-shrink: 0;
}

/* candidate-header */
.candidate-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  width: 100%;
  padding-bottom: 20px;
}

.candidate-header__left {
  flex: 1;
}

.candidate-header__title {
  font-size: 20px;
  font-weight: 700;
  padding-top: 8px;
  padding-bottom: 4px;
}

.candidate-header__right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.candidate-header__button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  background-color: var(--ms-primary);
  border-radius: 4px;
}

.candidate-header__button--add-candidate {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 4px;
  padding: 0 24px 0 16px;
  border-right: 1px solid var(--ms-border-color-translucent);
  color: var(--ms-white);
  font-weight: 600;
}

.candidate-header__button--dropdown {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 40px !important;
}

.candidate-header__button--add-candidate:hover,
.candidate-header__button--dropdown:hover {
  background-color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
}

/* toolbar */
.toolbar__button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border: 1px solid var(--ms-border-color-translucent);
  border-radius: 4px;
}

.toolbar__button:hover {
  background-color: var(--ms-primary-bg-subtle);
  cursor: pointer;
}

/* candidates-table */
.candidates-table {
  width: 100%;
  height: 100%;
}

.candidates-table__element {
  width: max-content;
  min-width: 100%;
  border-collapse: collapse;
}

.candidates-table__header {
  background-color: #f8f9fa;
  position: sticky;
  top: 0;
  z-index: 15;
}

.candidates-table__row {
  border-bottom: 1px solid #dee2e6;
}

.candidates-table__cell {
  padding: 12px 16px;
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  color: #495057;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.candidates-table__cell--checkbox,
.candidates-table__cell--name,
.candidates-table__cell--sticky-action {
  position: sticky;
  background-color: #f8f9fa;
  box-shadow: 2px 0 3px rgba(0, 0, 0, 0.05);
}

.candidates-table__data-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
}

.candidates-table__avatar {
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  border-radius: 50%;
  color: white;
  font-size: 12px;
  flex-shrink: 0;
}

.candidates-table__avatar--red {
  background-color: #dc3545;
}

.candidates-table__action-icon {
  color: #6c757d;
  opacity: 0;
}

.candidates-table__row:hover .candidates-table__action-icon {
  opacity: 1;
}

/* pagination */
.pagination__left,
.pagination__right {
  display: flex;
  align-items: center;
}

.pagination__summary,
.pagination__text {
  font-size: 14px;
  color: var(--ms-gray-700);
  font-weight: 600;
}

.pagination__info-range {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--ms-gray-800);
  font-weight: 600;
}

.pagination__controller {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--ms-border-color-translucent);
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
}
</style>
