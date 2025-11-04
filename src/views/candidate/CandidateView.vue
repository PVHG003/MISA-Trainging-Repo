<script setup>
import { ref } from 'vue'
import AddCandidateForm from '@/views/candidate/AddCandidateForm.vue'
import { CandidateTableHeaderEnum } from '@/constants/candidateTableHeaderEnum.js'
import { CandidateData } from '@/resources/candidateData.js'
import { checkNull, formatDate, formatGender, parseTags } from '@/utils/formatUtils.js'

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

                <th
                  v-for="(label, key) in CandidateTableHeaderEnum"
                  :key="key"
                  class="candidates-table__cell"
                  :class="{
                    'candidates-table__cell--name': key === 'CandidateName',
                    'candidates-table__cell--checkbox': key === 'Checkbox',
                  }"
                >
                  {{ label }}
                </th>

                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="candidate in CandidateData"
                :key="candidate.key"
                class="candidates-table__row"
              >
                <td class="candidates-table__cell candidates-table__cell--checkbox">
                  <input type="checkbox" class="candidates-table__checkbox-row" />
                </td>

                <td class="candidates-table__cell candidates-table__cell--name">
                  <div class="candidates-table__data-wrapper">
                    <div class="candidates-table__avatar candidates-table__avatar--red">TL</div>
                    <span>{{ checkNull(candidate.CandidateName) }}</span>
                  </div>
                </td>

                <td class="candidates-table__cell">{{ checkNull(candidate.Mobile) }}</td>
                <td class="candidates-table__cell">{{ checkNull(candidate.Email) }}</td>
                <td class="candidates-table__cell">
                  {{ checkNull(candidate.RecruitmentCampaignNames) }}
                </td>
                <td class="candidates-table__cell">{{ checkNull(candidate.JobPositionName) }}</td>
                <td class="candidates-table__cell">
                  {{ checkNull(candidate.RecruitmentRoundName) }}
                </td>
                <td class="candidates-table__cell">
                  <div class="cell__wrapper">
                    <div class="stars">
                      <template v-for="i in 5" :key="i">
                        <span v-if="i <= Math.floor(candidate.Score.source ?? candidate.Score)"
                          ><i class="fa-solid fa-star" style="color: var(--ms-yellow)"></i
                        ></span>
                        <span v-else
                          ><i class="fa-solid fa-star" style="color: var(--ms-gray-300)"></i
                        ></span>
                      </template>
                    </div>
                  </div>
                </td>
                <td class="candidates-table__cell">
                  {{ formatDate(candidate.ApplyDate) }}
                </td>
                <td class="candidates-table__cell">{{ checkNull(candidate.ChannelName) }}</td>
                <td class="candidates-table__cell">
                  {{ checkNull(candidate.EducationDegreeName) }}
                </td>
                <td class="candidates-table__cell">
                  {{ checkNull(candidate.EducationPlaceName) }}
                </td>
                <td class="candidates-table__cell">
                  {{ checkNull(candidate.EducationMajorName) }}
                </td>
                <td class="candidates-table__cell">{{ checkNull(candidate.WorkPlaceRecent) }}</td>
                <td class="candidates-table__cell">
                  {{ checkNull(candidate.AttractivePersonnel) }}
                </td>
                <td class="candidates-table__cell">
                  {{ checkNull(candidate.OrganizationUnitName) }}
                </td>
                <td class="candidates-table__cell">{{ checkNull(candidate.Overall) }}</td>
                <td class="candidates-table__cell">{{ checkNull(candidate.AreaName) }}</td>
                <td class="candidates-table__cell">{{ checkNull(candidate.PresenterName) }}</td>
                <td class="candidates-table__cell">
                  {{ checkNull(candidate.ProbationInfoStatus) }}
                </td>
                <td class="candidates-table__cell">
                  {{ checkNull(candidate.IsTalentPoolDetail) }}
                </td>
                <td class="candidates-table__cell">{{ checkNull(candidate.AccountPortal) }}</td>
                <td class="candidates-table__cell">
                  <div
                    v-if="parseTags(checkNull(candidate.TagInfos)).length"
                    class="candidates-table__tags"
                  >
                    <span
                      v-for="tag in parseTags(checkNull(candidate.TagInfos))"
                      :key="tag.TagID"
                      class="candidates-table__tag"
                      :style="{ backgroundColor: tag.TagColor, color: tag.TextColor }"
                    >
                      {{ tag.TagName }}
                    </span>
                  </div>
                  <span v-else>---</span>
                </td>
                <td class="candidates-table__cell">
                  {{ checkNull(candidate.CandidateStatusName) }}
                </td>
                <td class="candidates-table__cell">
                  {{ formatGender(checkNull(candidate.Gender)) }}
                </td>
                <td class="candidates-table__cell">
                  {{ formatDate(candidate.Birthday) }}
                </td>
                <td class="candidates-table__cell">{{ checkNull(candidate.Address) }}</td>
                <td class="candidates-table__cell">{{ checkNull(candidate.ReasonRemoved) }}</td>
                <td class="candidates-table__cell">{{ checkNull(candidate.CollaboratorName) }}</td>
                <td class="candidates-table__cell">
                  {{ formatDate(candidate.HireDate) }}
                </td>
                <td class="candidates-table__cell">{{ checkNull(candidate.OfferStatus) }}</td>

                <td class="candidates-table__cell candidates-table__cell--edit">
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
.candidates-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

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

.candidates-page__table {
  flex: 1;
  width: 100%;
  height: calc(100% - 60px);
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: #ced4da transparent;
}

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
  background-color: #dbdbdb;
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

.candidates-table__cell--checkbox {
  width: 40px;
  padding-left: 16px;
  position: sticky;
  left: 0;
  z-index: 20;
  background-color: #f8f9fa;
  box-shadow: 2px 0 3px rgba(0, 0, 0, 0.05);
}

.candidates-table__cell--name {
  width: 200px;
  position: sticky;
  left: 40px;
  z-index: 20;
  background-color: #f8f9fa;
  box-shadow: 2px 0 3px rgba(0, 0, 0, 0.05);
}

.candidates-table__row > th {
  background-color: #dbdbdb;
}

.candidates-table__cell--edit {
  width: 50px;
  text-align: center;
  position: sticky;
  right: 0;
  z-index: 20;
  background-color: #f8f9fa;
  box-shadow: -2px 0 3px rgba(0, 0, 0, 0.05);
  padding: 16px;
}

.candidates-table__row > .candidates-table__cell--checkbox {
  position: sticky;
  left: 0;
  z-index: 5;
}

.candidates-table__row > .candidates-table__cell--name {
  position: sticky;
  left: 40px;
  z-index: 5;
}

.candidates-table__row > .candidates-table__cell--edit {
  position: sticky;
  right: 0;
  z-index: 5;
  background-color: white;
}

.candidates-table__cell:not(.candidates-table__cell--checkbox):not(
    .candidates-table__cell--name
  ):not(.candidates-table__cell--edit) {
  padding-left: 16px;
  padding-right: 16px;
}

.candidates-table__data-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
}

.candidates-table__avatar {
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  line-height: 24px;
  align-content: center;
  justify-content: center;
  border-radius: 50%;
  color: #ffffff;
  display: flex;
}

.candidates-table__avatar--red {
  background-color: #dc3545;
}
.candidates-table__avatar--blue {
  background-color: #007bff;
}
.candidates-table__avatar--yellow {
  background-color: #ffc107;
}

.candidates-table__status-icon--active {
  color: #28a745;
  font-size: 14px;
  margin-left: 4px;
}

.candidates-table__action-icon {
  color: #6c757d;
  opacity: 0;
}

.candidates-table__row:hover .candidates-table__action-icon {
  opacity: 1;
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

.pagination__left {
  display: flex;
  align-items: center;
  flex: 1;
}

.pagination__summary {
  font-size: 14px;
  color: var(--ms-gray-700);
  font-weight: 600;
}

.pagination__right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.pagination__text {
  font-size: 14px;
  color: var(--ms-gray-700);
}

.candidates-page__pagination select {
  border: 1px solid var(--ms-border-color-translucent);
  border-radius: 4px;
  font-size: 14px;
  color: var(--ms-gray-800);
  cursor: pointer;
  height: 36px;
  appearance: none;
  background: white
    url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")
    no-repeat right 8px center;
  background-size: 10px;
  padding: 6px 25px 6px 10px;
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
  border: 1px solid var(--ms-border-color-translucent);
  border-radius: 4px;
  overflow: hidden;
}

.pagination__controller {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
