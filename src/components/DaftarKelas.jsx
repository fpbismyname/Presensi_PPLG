import React, { useEffect, useState } from "react";
import {db} from "../firebase-config"
import { onValue, ref } from "firebase/database";

const Daftar_Kelas = () => {
  const Kelas = () => {

    return (
      <>
        <tr>;
          <td>Kumalala</td>
        </tr>
      </>
    )
  }
  return (
    <div className="Dftr_Absns">
      <table border="1">
        <tr>
          <th>Daftar Kelas</th>
        </tr>
        {Kelas()}
      </table>
    </div>
  );
};

export default Daftar_Kelas;
