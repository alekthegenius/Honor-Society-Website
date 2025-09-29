<script lang="ts">
    const honorSocieties = [
        {
            name: "Eta Sigma Alpha",
            focus: "Scholastic",
            testScores: {
                SAT: 1200,
                PSAT: 1200,
                PSAT10: 1170,
                PSAT8_9_9th: 1090,
                PSAT8_9_8th: 1020,
                ACT: 26,
                PreACT10: 26,
                Iowa: "90%",
                Stanford: "90%",
                TerraNova2: "90%",
                CLT: 88,
                CLT8or10: 97,
                onlineTesting: "Yes"
            },
            fees: { initial: "$30", renewal: "$20", additional: "Seniors can purchase honor shawl and/or cord" },
            communityService: "10 hours",
            other: ""
        },
        {
            name: "Mu Eta Sigma",
            focus: "Math",
            testScores: {
                SAT: "SAT Math 600",
                PSAT: "PSAT Math 600",
                ACT: "ACT Math 26",
                PreACT10: "ACT Math 26",
                Iowa: "Math 90%",
                Stanford: "Math 90%",
                onlineTesting: "No"
            },
            fees: { initial: "$45", renewal: "$20", additional: "Seniors can purchase honor stole and/or cord" },
            communityService: "10 hours",
            other: "$250 scholarship available"
        },
        {
            name: "NHSHS",
            focus: "Science",
            testScores: {
                SAT: "SAT 2 Science 600",
                ACT: "ACT Science 26",
                Iowa: "Science 90%",
                Stanford: "Science 90%",
                TerraNova2: "Science 90%",
                CLT: "CLEP Science 68",
                CLT8or10: "AP Science 4 or 5",
                onlineTesting: "Yes"
            },
            fees: { initial: "$40", renewal: "$40", additional: "" },
            communityService: "20 hours",
            other: "Additional award levels"
        }
    ];

    type TestScoreKeys = keyof typeof honorSocieties[0]["testScores"];

    const testScoreKeys: TestScoreKeys[] = [
        "SAT",
        "PSAT",
        "PSAT10",
        "PSAT8_9_9th",
        "PSAT8_9_8th",
        "ACT",
        "PreACT10",
        "Iowa",
        "Stanford",
        "TerraNova2",
        "CLT",
        "CLT8or10",
        "onlineTesting"
    ];

    const displayNames: Record<TestScoreKeys, string> = {
        SAT: "SAT",
        PSAT: "PSAT",
        PSAT10: "PSAT 10",
        PSAT8_9_9th: "PSAT 8/9 ~ 9th",
        PSAT8_9_8th: "PSAT 8/9 ~ 8th",
        ACT: "ACT",
        PreACT10: "Pre-ACT 10",
        Iowa: "Iowa",
        Stanford: "Stanford",
        TerraNova2: "Terra Nova 2",
        CLT: "CLT",
        CLT8or10: "CLT 8 or 10",
        onlineTesting: "Online Testing Accepted?"
    };
</script>

<table>
  <thead>
    <tr>
      <th>Test Scores</th>
      {#each honorSocieties as society}
        <th>{society.name}<br>{society.focus}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each testScoreKeys as key}
      <tr>
        <td>{displayNames[key]}</td>

        {#each honorSocieties as society}
          <td>{society.testScores[key] ?? ""}</td>
        {/each}
      </tr>
    {/each}

    <tr style="background-color: #155515">
      <td>Initial Fees</td>
      {#each honorSocieties as society}
        <td>{society.fees.initial}</td>
      {/each}
    </tr>
    <tr style="background-color: #155515">
      <td>Renewal Fees</td>
      {#each honorSocieties as society}
        <td>{society.fees.renewal}</td>
      {/each}
    </tr>
    <tr style="background-color: #155515">
      <td>Additional Fees</td>
      {#each honorSocieties as society}
        <td>{society.fees.additional}</td>
      {/each}
    </tr>

    <tr style="background-color: #552115">
      <td>Community Service</td>
      {#each honorSocieties as society}
        <td>{society.communityService}</td>
      {/each}
    </tr>
    <tr style="background-color: #793876" class="bottom-row">
      <td>Other</td>
      {#each honorSocieties as society}
        <td>{society.other}</td>
      {/each}
    </tr>
  </tbody>
</table>

<style lang="scss">
  table {
    width: 100%;
    border-collapse: separate;
    background-color: white;
    border-spacing: 1px;
    border: hidden;
    border-radius: 1rem;
  }

  th, td {
    padding: 0.5rem; /* Optional: Add padding for content */
    text-align: left;
    color: white;
    border: hidden;
    padding: 0.5rem; /* Optional: Add padding for content */
  }

  th {
    background-color: #44b2e5;

    padding: 0.5rem; /* Optional: Add padding for content */
  }




  table tr:first-child th:first-child {
    border-top-left-radius: 1rem;
  } 

  table tr:first-child th:last-child {
    border-top-right-radius: 1rem;
  }

  .bottom-row td:first-child {
    border-bottom-left-radius: 1rem;
  }

  .bottom-row td:last-child {
    border-bottom-right-radius: 1rem;
  }

  tbody tr:nth-child(even) {
    background-color: #44b2e5;
  }

  tbody tr:nth-child(odd) {
    background-color: #14729e;

  }

</style>
