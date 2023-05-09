export default function LifeInCanadaFirstTable() {
  return (
    <table>
      <thead>
        <tr>
          <th rowSpan={2}>자녀/부양 성인 수</th>
          <th colSpan={2}>12개월 총 지원금</th>
        </tr>
        <tr>
          <th>개인</th>
          <th>부부</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>자녀없음</td>
          <td>403만원</td>
          <td>581만원</td>
        </tr>
        <tr>
          <td>17세 이하 자녀1명</td>
          <td>423만원</td>
          <td>581만원</td>
        </tr>
        <tr>
          <td>17세 이하 자녀2명</td>
          <td>423만원</td>
          <td>581만원</td>
        </tr>
        <tr>
          <td>18세 이상 부양 성인1명</td>
          <td>733만원</td>
          <td>767만원</td>
        </tr>
        <tr>
          <td>18세 이상 부양 성인2명</td>
          <td>919만원</td>
          <td>972만원</td>
        </tr>
      </tbody>
    </table>
  );
}
