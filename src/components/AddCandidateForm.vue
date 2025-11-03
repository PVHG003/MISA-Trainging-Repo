<script setup>
import { ref } from 'vue'
import MsInput from '@/components/common/MsInput.vue'
import MsSelect from '@/components/common/MsSelect.vue'
import MsButton from '@/components/common/MsButton.vue'

const formData = ref({
  fullName: '',
  birthday: '',
  gender: '',
  area: '',
  mobile: '',
  email: '',
})
</script>

<template>
  <div class="popup">
    <div class="popup__overlay">
      <div class="popup__content">
        <div class="popup__header">
          <div class="popup__header--title">Thêm ứng viên</div>
          <div class="popup__header--close" @click="$emit('close')">
            <div class="icon icon__close"></div>
          </div>
        </div>
        <div class="popup__body">
          <ms-input
            v-model="formData.fullName"
            inputType="text"
            placeholder="Nhập họ và tên"
            :required="true"
          >
            <template v-slot:label>Họ và tên</template>
          </ms-input>
          <div class="input__group--double">
            <ms-input
              v-model="formData.birthday"
              inputType="date"
              placeholder="dd/MM/yyyy"
              :required="true"
              class="flex-1"
            >
              <template v-slot:label>Ngày sinh</template>
            </ms-input>
            <ms-select
              v-model="formData.gender"
              name="gender"
              :options="[
                { key: 'male', value: 'Nam' },
                { key: 'female', value: 'Nữ' },
              ]"
              placeholder="Chọn giới tính"
              class="flex-1"
            >
              <template v-slot:label>Giới tính</template>
            </ms-select>
          </div>
          <ms-select
            v-model="formData.area"
            name="area"
            :options="[
              { key: 'male', value: 'Nam' },
              { key: 'female', value: 'Nữ' },
            ]"
            placeholder="Chọn giá trị"
          >
            <template v-slot:label>Khu vực</template>
          </ms-select>
          <div class="input__group--double">
            <ms-input
              v-model="formData.mobile"
              inputType="text"
              placeholder="Nhập số điện thoại"
              class="flex-1"
            >
              <template v-slot:label>Số điện thoại</template>
            </ms-input>
            <ms-input
              v-model="formData.email"
              inputType="text"
              placeholder="Nhập email"
              class="flex-1"
            >
              <template v-slot:label>Email</template>
            </ms-input>
          </div>
          <ms-input v-model="formData.address" inputType="text" placeholder="Nhập địa chỉ">
            <template v-slot:label>Địa chỉ</template>
          </ms-input>
          <div class="input__group__educations">
            <div class="input-group__title">HỌC VẤN</div>
            <div class="input-group__wrapper">
              <ms-input
                v-model="formData.address"
                inputType="text"
                placeholder="Nhập trình độ đào tạo"
              >
                <template v-slot:label>Trình độ đào tạo</template>
              </ms-input>
              <ms-input v-model="formData.address" inputType="text" placeholder="Nhập nơi đào tạo">
                <template v-slot:label>Nơi đào tạo</template>
              </ms-input>
              <ms-input v-model="formData.address" inputType="text" placeholder="Nhập chuyên ngành">
                <template v-slot:label>Chuyên ngành</template>
              </ms-input>
            </div>
          </div>
        </div>
        <div class="popup__footer">
          <ms-button variant="secondary">Hủy</ms-button>
          <ms-button variant="primary">Lưu</ms-button>
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
  width: 560px;
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

.popup__header--close {
  cursor: pointer;
}

.popup__body {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  flex: 1;
}

.input__group--double {
  display: flex;
  width: 100%;
  gap: 16px;
}

.input__group__educations {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.input-group__wrapper {
  display: flex;
  flex-direction: column;
}

.input-group__title {
  font-size: 16px;
  color: #1e2633;
  height: 25px !important;
  line-height: 25px !important;
  font-weight: 600;
  margin-bottom: 16px;
}

.input-group__wrapper > .input-group {
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
}

.popup__footer {
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 9px 24px;
  gap: 16px;
  border-top: 1px solid #dddde4;
}
</style>
