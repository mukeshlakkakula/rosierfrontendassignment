import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Import Firestore instance
import ResponsiveSlider from "../ResponsiveSlider/ResponsiveSlider ";

const BestSellers = () => {
  const [bestsellers, setBestsellers] = useState([]);
  useEffect(() => {
    const fetchBestsellers = async () => {
      const querySnapshot = await getDocs(collection(db, "bestsellers")); // Fetch from 'bestsellers' collection
      const bestsellerList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBestsellers(bestsellerList);
    };

    fetchBestsellers();
  }, []);

  return (
    <div>
      <div>
        <ul>
          <ResponsiveSlider items={bestsellers} />
        </ul>
      </div>
    </div>
  );
};

export default BestSellers;
