import Locale from '@components/Locale';

export default function HealthcareCoverageTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <Locale.en>Basic OHIP Coverage</Locale.en>
            <Locale.ko>기본 온타리오 병원 치료 건강 보험 사업(OHIP) 적용 범위</Locale.ko>
          </th>
          <th>
            <Locale.en>IFHP Supplemental Coverage</Locale.en>
            <Locale.ko>림임시 련연방 병원 치료 사업 (IFHP) 추가 보장 범위</Locale.ko>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="col">
            <Locale.en>Medical Services</Locale.en>
            <Locale.ko>의료 봉사</Locale.ko>
          </th>
          <th scope="col">
            <Locale.en>Limited Vision Care</Locale.en>
            <Locale.ko>기본 시력 관리</Locale.ko>
          </th>
        </tr>
        <tr>
          <td>
            <Locale.en>Doctor visits</Locale.en>
            <Locale.ko>의사 왕진</Locale.ko>
          </td>
          <td>
            <Locale.en>1 pair of eyewear (glasses and/or lenses every 2 years)</Locale.en>
            <Locale.ko>안경 1쌍 (2년마다 안경 및 렌즈 제공)</Locale.ko>
          </td>
        </tr>
        <tr>
          <td>
            <Locale.en>Standard immunizations</Locale.en>
            <Locale.ko>기본 예방접종</Locale.ko>
          </td>
          <td>
            <Locale.en>1 vision test per year</Locale.en>
            <Locale.ko>연간 시력 검사 1회</Locale.ko>
          </td>
        </tr>
        <tr>
          <td>
            <Locale.en>Prenatal and obstetrical care</Locale.en>
            <Locale.ko>산부인과 진료</Locale.ko>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <Locale.en>Lab tests &amp; x-rays</Locale.en>
            <Locale.ko>기본 건강검진 및 엑스레이</Locale.ko>
          </td>
          <th scope="col">
            <Locale.en>Urgent Dental Care</Locale.en>
            <Locale.ko>치과 진료</Locale.ko>
          </th>
        </tr>
        <tr>
          <td></td>
          <td>
            <Locale.en>Emergency dental exams &amp; x-rays</Locale.en>
            <Locale.ko>치과 검진 및 엑스레이 (응급 상황 시)</Locale.ko>
          </td>
        </tr>
        <tr>
          <th scope="col">
            <Locale.en>Hospital Services</Locale.en>
            <Locale.ko>병원 봉사</Locale.ko>
          </th>
          <td>
            <Locale.en>Extractions &amp; Dentures</Locale.en>
            <Locale.ko>발치 및 틀니</Locale.ko>
          </td>
        </tr>
        <tr>
          <td>
            <Locale.en>Emergency room visits</Locale.en>
            <Locale.ko>응급실 비용</Locale.ko>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <Locale.en>Hospital stays</Locale.en>
            <Locale.ko>입원</Locale.ko>
          </td>
          <th scope="col">
            <Locale.en>Mental Health Services</Locale.en>
            <Locale.ko>정신건강 상담</Locale.ko>
          </th>
        </tr>
        <tr>
          <td>
            <Locale.en>Medical &amp; surgical care</Locale.en>
            <Locale.ko>내과 및 외과진료</Locale.ko>
          </td>
          <td>
            <Locale.en>Psychological counselling</Locale.en>
            <Locale.ko>심리 상담</Locale.ko>
          </td>
        </tr>
        <tr>
          <td>
            <Locale.en>Diagnostic imaging</Locale.en>
            <Locale.ko>영상진단</Locale.ko>
          </td>
          <td>
            <Locale.en>Assistive devices, medical supplies, and equipment</Locale.en>
            <Locale.ko>보조 기구, 의료용품 및 장비</Locale.ko>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
