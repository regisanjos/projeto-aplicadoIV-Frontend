import React, { useState, useEffect } from 'react';
import TrackingMap from '../components/TrackingMap';

/**
 * Página de rastreamento da doação.
 *
 * @param {string} donationId - ID da doação.
 */
const TrackingPage = ({ donationId }) => {
  const [trackingData, setTrackingData] = useState(null); // Dados de rastreamento da doação.

  useEffect(() => {
    try {
      // Criar conexão WebSocket para receber atualizações de rastreamento.
      const ws = new WebSocket('ws://localhost:4000'); // Endereço do WebSocket do backend.

      // Verificar se a conexão WebSocket está aberta antes de enviar dados.
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({ donationId }));
      }

      ws.onopen = () => {
        console.log('Conexão WebSocket estabelecida');
      };

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data); // Dados recebidos do WebSocket.

        // Verificar se os dados recebidos são válidos.
        if (data && data.location) {
          setTrackingData(data);
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

  return (
    <div>
      <h1>Rastreamento da Doação {donationId}</h1>
      {trackingData && trackingData.location ? (
        <TrackingMap location={trackingData.location} /> // Exibe o mapa com a localização recebida.
      ) : (
        <p>Sem dados de rastreamento no momento.</p>
      )}
    </div>
  );
};

export default TrackingPage;