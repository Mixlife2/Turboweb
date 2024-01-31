import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar/NavBar'; // Asegúrate de tener la ruta correcta

const PlansPage: React.FC = () => {
  const [monto, setMonto] = useState<number>(0);
  const [transactionId, setTransactionId] = useState<string | null>(null);
  const [metodoPago, setMetodoPago] = useState<string>('tarjeta');

  const iniciarPago = async () => {
    try {
      // Llama a la API de Belo para iniciar un nuevo pago
      const response = await axios.post('URL_DE_BELO/api/v2/payments', {
        amount: monto,
        method: metodoPago, // Agrega el método de pago seleccionado
        // Agrega más parámetros según la documentación de Belo
      });

      // Guarda el ID de la transacción devuelto por Belo
      setTransactionId(response.data.transaction_id);
    } catch (error) {
      console.error('Error al iniciar el pago con Belo:', error);
      // Maneja errores según tus necesidades
    }
  };

  const confirmarPago = async () => {
    try {
      // Llama a la API de Belo para confirmar el pago
      const response = await axios.post(`URL_DE_BELO/api/v2/payments/${transactionId}/confirm`, {
        // Agrega más parámetros según la documentación de Belo
      });

      // Maneja la respuesta según tus necesidades
      console.log('Pago confirmado:', response.data);
    } catch (error) {
      console.error('Error al confirmar el pago con Belo:', error);
      // Maneja errores según tus necesidades
    }
  };

  return (
    <div>
      <NavBar />
      <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Página de Pagos con Belo</h1>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="monto" style={{ display: 'block', marginBottom: '5px' }}>
            Monto:
          </label>
          <input
            type="number"
            id="monto"
            value={monto}
            onChange={(e) => setMonto(Number(e.target.value))}
            style={{ width: '100%', padding: '10px', fontSize: '16px' }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="metodoPago" style={{ display: 'block', marginBottom: '5px' }}>
            Método de Pago:
          </label>
          <select
            id="metodoPago"
            value={metodoPago}
            onChange={(e) => setMetodoPago(e.target.value)}
            style={{ width: '100%', padding: '10px', fontSize: '16px' }}
          >
            <option value="tarjeta">Tarjeta de Crédito</option>
            <option value="criptomonedas">Criptomonedas</option>
            {/* Agrega más opciones según la documentación de Belo */}
          </select>
        </div>

        <button
          onClick={() => iniciarPago()}
          style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', fontSize: '16px' }}
        >
          Iniciar Pago
        </button>

        {transactionId && (
          <div style={{ marginTop: '20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Confirmar Pago</h2>
            <button
              onClick={() => confirmarPago()}
              style={{ backgroundColor: '#008CBA', color: 'white', padding: '10px 20px', fontSize: '16px' }}
            >
              Confirmar Pago
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlansPage;
