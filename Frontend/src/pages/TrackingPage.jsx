import React, { useState, useEffect } from 'react';
import TrackingMap from '../components/TrackingMap';

const TrackingPage = ({ donationId }) => {
  if (!donationId || typeof donationId !== 'string') {
    return <div>ID da doação inválido.</div>;
  }

  const [trackingData, setTrackingData] = useState(null);
  const [status, setStatus] = useState('Pendente');

  useEffect(() => {
    try {
      const ws = new WebSocket('ws://localhost:4000');
      ws.onopen = () => {
        console.log('Conexão WebSocket estabelecida');
        ws.send(JSON.stringify({ donationId }));
      };

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data && data.location && data.status) {
          setTrackingData(data);
        } else {
          console.error('Dados de rastreamento inválidos:', data);
        }
      };

      ws.onerror = (error) => {
        console.error('Erro no WebSocket:', error);
      };

      ws.onclose = () => {
        console.log('Conexão WebSocket fechada');
      };

      return () => {
        ws.close();
      };
    } catch (error) {
      console.error('Erro ao criar conexão WebSocket:', error);
    }
  }, [donationId]);

  const handleSimulateCollection = () => {
    setStatus('Em Trânsito');
    setTrackingData({ location: { lat: -23.5505, lng: -46.6333 }, status: 'Em Trânsito' });
  };

  const handleSimulateTransport = () => {
    setStatus('Em Trânsito');
    setTrackingData({ location: { lat: -25.4284, lng: -49.2733 }, status: 'Em Trânsito' });
  };

  const handleSimulateDelivery = () => {
    setStatus('Entregue');
    setTrackingData({ location: { lat: -30.0346, lng: -51.2177 }, status: 'Entregue' });
  };

  return (
    <div>
      <h1>Rastreamento da Doação {donationId}</h1>
      <h3>Status: {status}</h3>
      {trackingData && trackingData.location ? (
        <TrackingMap location={trackingData.location} />
      ) : (
        <p>Sem dados de rastreamento no momento.</p>
      )}
      <div>
        <button onClick={handleSimulateCollection}>Simular Coleta</button>
        <button onClick={handleSimulateTransport}>Simular Transporte</button>
        <button onClick={handleSimulateDelivery}>Simular Entrega</button>
      </div>
    </div>
  );
};

export default TrackingPage;