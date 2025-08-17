import "./welcome.css";
import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Welcome() {
  const navigate = useNavigate();

  useEffect(() => {
    const delay = setTimeout(() => {
      navigate("/home");
    }, 4500);
    return () => {
      clearTimeout(delay);
    };
  }, []);
  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: "0%" }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5 }}
    >
      <section className="welcome">
        <div className="square">
          <ShoppingCart className="myCart" size={60} />
          <h1>
            <span>N</span>ovastore
          </h1>
        </div>
      </section>
    </motion.div>
  );
}

export default Welcome;
