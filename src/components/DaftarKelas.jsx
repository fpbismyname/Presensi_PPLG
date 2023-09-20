import React from "react";

const Daftar_Kelas = () => {
  const kontol = () => {
    let leng = 10;
    while (leng > 0) {
        return(
            <tr>
                <td>Kontol</td>
            </tr>
        )
    }
  };
  return (
    <div className="Dftr_Absns">
      <table border="1">
        <tr>
          <th>Daftar Kelas</th>
        </tr>
        {kontol()}
      </table>
    </div>
  );
};

export default Daftar_Kelas;
