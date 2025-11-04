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
  address: '',
  educationDegreeName: '',
  educationPlaceName: '',
  educationMajorName: '',
  applicationDate: '',
  recruitmentSource: '',
  recruiter: '',
  collaborator: '',
  addReferralToPool: false,
  latestWorkplace: '',
  workplace: '',
  jobPosition: '',
  jobDescription: '',
  workTimeFrom: '',
  workTimeTo: '',
})

// Sample options for Selects based on the image's structure
const recruitmentSourceOptions = [
  { key: 'source1', value: 'Nguồn A' },
  { key: 'source2', value: 'Nguồn B' },
]

const recruiterOptions = [
  { key: 'recruiter1', value: 'Đinh Nga QTHT' },
  { key: 'recruiter2', value: 'Nguyễn Văn A' },
]

const collaboratorOptions = [
  { key: 'collab1', value: 'Cộng tác viên 1' },
  { key: 'collab2', value: 'Cộng tác viên 2' },
]

/**
 * Handles form submission by logging the form data.
 *
 * @returns {void}
 *
 * Author: Phạm Việt Hưng
 * @date 04/11/2024
 */
function handleSave() {
  console.log(formData.value)
}
</script>

<template>
  <div class="candidate-popup">
    <div class="candidate-popup__overlay">
      <div class="candidate-popup__content">
        <div class="candidate-popup__header">
          <div class="candidate-popup__title">Thêm ứng viên</div>
          <div class="candidate-popup__close-btn" @click="$emit('close')">
            <div class="icon icon__close"></div>
          </div>
        </div>
        <div class="candidate-popup__body">
          <ms-input
            v-model="formData.fullName"
            inputType="text"
            placeholder="Nhập họ và tên"
            :required="true"
          >
            <template v-slot:label>Họ và tên</template>
          </ms-input>
          <div class="form-group form-group--double">
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
              { key: 'area1', value: 'Hà Nội' },
              { key: 'area2', value: 'TP. Hồ Chí Minh' },
            ]"
            placeholder="Chọn giá trị"
          >
            <template v-slot:label>Khu vực</template>
          </ms-select>
          <div class="form-group form-group--double">
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

          <div class="education-section">
            <div class="education-group">
              <div class="education-group__title">HỌC VẤN</div>
              <div class="education-group__wrapper">
                <ms-input
                  v-model="formData.educationDegreeName"
                  inputType="text"
                  placeholder="Nhập trình độ đào tạo"
                >
                  <template v-slot:label>Trình độ đào tạo</template>
                </ms-input>
                <ms-input
                  v-model="formData.educationPlaceName"
                  inputType="text"
                  placeholder="Nhập nơi đào tạo"
                >
                  <template v-slot:label>Nơi đào tạo</template>
                </ms-input>
                <ms-input
                  v-model="formData.educationMajorName"
                  inputType="text"
                  placeholder="Nhập chuyên ngành"
                >
                  <template v-slot:label>Chuyên ngành</template>
                </ms-input>
              </div>
            </div>
            <div class="form-action__add-more">+ Thêm học vấn</div>
          </div>

          <div class="form-group form-group--double">
            <ms-input
              v-model="formData.applicationDate"
              inputType="date"
              placeholder="dd/MM/yyyy"
              :required="true"
              class="flex-1"
            >
              <template v-slot:label>Ngày ứng tuyển <span style="color: red">*</span></template>
            </ms-input>
            <ms-select
              v-model="formData.recruitmentSource"
              name="recruitmentSource"
              :options="recruitmentSourceOptions"
              placeholder="Chọn nguồn ứng viên"
              class="flex-1"
            >
              <template v-slot:label>Nguồn ứng viên</template>
            </ms-select>
          </div>

          <div class="form-group form-group--double">
            <ms-select
              v-model="formData.recruiter"
              name="recruiter"
              :options="recruiterOptions"
              placeholder="Chọn nhân sự khai thác"
              class="flex-1"
            >
              <template v-slot:label>Nhân sự khai thác</template>
            </ms-select>
            <ms-select
              v-model="formData.collaborator"
              name="collaborator"
              :options="collaboratorOptions"
              placeholder="Chọn cộng tác viên"
              class="flex-1"
            >
              <template v-slot:label>Cộng tác viên</template>
            </ms-select>
          </div>

          <div class="checkbox-group">
            <input type="checkbox" id="add-ref" v-model="formData.addReferralToPool" />
            <label for="add-ref">Thêm nhanh người tham chiếu vào kho ứng viên</label>
          </div>

          <div class="input-group__referral--wrapper">
            <div class="form-action__add-more form-action__add-more--referral">
              + Thêm người giới thiệu
            </div>
          </div>

          <ms-input
            v-model="formData.latestWorkplace"
            inputType="text"
            placeholder="Nhập nơi làm việc gần đây"
          >
            <template v-slot:label>Nơi làm việc gần đây</template>
          </ms-input>

          <div class="work-experience-section">
            <div class="form-action__add-more">+ Thêm kinh nghiệm làm việc</div>
            <div class="work-experience-group">
              <ms-input
                v-model="formData.workplace"
                inputType="text"
                placeholder="Nhập nơi làm việc"
              >
                <template v-slot:label>Nơi làm việc</template>
              </ms-input>

              <div class="form-group form-group--double form-group--time-range">
                <div class="flex-1">
                  <ms-input v-model="formData.workTimeFrom" inputType="date" placeholder="MM/yyyy">
                    <template v-slot:label>Thời gian</template>
                  </ms-input>
                </div>
                <span class="time-range-separator">-</span>
                <div class="flex-1">
                  <ms-input v-model="formData.workTimeTo" inputType="date" placeholder="MM/yyyy">
                    <template v-slot:label>&nbsp;</template>
                  </ms-input>
                </div>
              </div>

              <ms-input
                v-model="formData.jobPosition"
                inputType="text"
                placeholder="Nhập vị trí công việc"
              >
                <template v-slot:label>Vị trí công việc</template>
              </ms-input>

              <ms-input
                v-model="formData.jobDescription"
                inputType="textarea"
                placeholder="Nhập mô tả công việc"
              >
                <template v-slot:label>Mô tả công việc</template>
              </ms-input>
            </div>
          </div>
        </div>
        <div class="candidate-popup__footer">
          <ms-button variant="secondary" @click="$emit('close')">Hủy</ms-button>
          <ms-button variant="primary" @click="handleSave">Lưu</ms-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Keeping all existing styles from the previous step */
.candidate-popup__overlay {
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

.candidate-popup__content {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 6px;
  width: 560px;
  height: 95%;
}

.candidate-popup__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid var(--ms-border-color);
}

.candidate-popup__title {
  font-size: 24px;
  font-weight: 700;
}

.candidate-popup__close-btn {
  cursor: pointer;
}

.candidate-popup__body {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 24px 16px 24px;
  flex: 1;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: #ced4da transparent;
}

.form-group--double {
  display: flex;
  width: 100%;
  gap: 16px;
}

.education-section {
  width: 100%;
  padding-bottom: 16px; /* Added padding to separate from next group */
}

.education-group {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.education-group__wrapper {
  display: flex;
  flex-direction: column;
  padding: 0 0 0 24px; /* Adjusted padding slightly */
  border-bottom: 1px solid var(--ms-border-color);
}

.education-group__title {
  font-size: 16px;
  color: #1e2633;
  height: 25px !important;
  line-height: 25px !important;
  font-weight: 600;
}

.education-group__wrapper > .input-group {
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
}

.form-action__add-more {
  color: var(--ms-primary);
  cursor: pointer;
}

.candidate-popup__footer {
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 9px 24px;
  gap: 16px;
  border-top: 1px solid #dddde4;
  flex-shrink: 0; /* Prevents footer from shrinking */
}

/* --- NEW STYLES for the added form elements --- */

.checkbox-group {
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  gap: 8px;
}

.checkbox-group input[type='checkbox'] {
  width: 18px;
  height: 18px;
}

.checkbox-group label {
  font-size: 14px;
  line-height: 18px;
}

.input-group__referral--wrapper {
  width: 100%;
  display: flex;
  justify-content: start;
}

.work-experience-section {
  width: 100%;
  border-bottom: 1px solid var(--ms-border-color);
}

.work-experience-group {
  display: flex;
  flex-direction: column;
  padding: 16px 0 0 0; /* Space above first input */
}

.form-group--time-range {
  align-items: center; /* Align inputs */
}

.time-range-separator {
  margin: 0 4px;
  font-weight: bold;
  font-size: 16px;
  line-height: 38px; /* To align with input height */
}
</style>
