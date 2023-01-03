export default function HealthcareCoverageTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Basic OHIP Coverage</th>
          <th>IFHP Supplemental Coverage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="col">Medical Services</th>
          <th scope="col">Limited Vision Care</th>
        </tr>
        <tr>
          <td>Doctor visits</td>
          <td>1 pair of eyewear (glasses and/or lenses every 2 years)</td>
        </tr>
        <tr>
          <td>Standard immunizations</td>
          <td>1 vision test per year</td>
        </tr>
        <tr>
          <td>Prenatal and obstetrical care</td>
          <td></td>
        </tr>
        <tr>
          <td>Lab tests &amp; x-rays</td>
          <th scope="col">Urgent Dental Care</th>
        </tr>
        <tr>
          <td></td>
          <td>Emergency dental exams &amp; x-rays</td>
        </tr>
        <tr>
          <th scope="col">Hospital Services</th>
          <td>Extractions &amp; Dentures</td>
        </tr>
        <tr>
          <td>Emergency room visits</td>
          <td></td>
        </tr>
        <tr>
          <td>Hospital stays</td>
          <th scope="col">Mental Health Services</th>
        </tr>
        <tr>
          <td>Medical &amp; surgical care</td>
          <td>Psychological counselling</td>
        </tr>
        <tr>
          <td>Diagnostic imaging</td>
          <td>Assistive devices, medical supplies, and equipment</td>
        </tr>
      </tbody>
    </table>
  );
}
