import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert, Modal, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  const [userId, setUserId] = React.useState('');
  const [searched, setSearched] = React.useState(false);
  const [userName, setUserName] = React.useState('');
  const [showPasswordModal, setShowPasswordModal] = React.useState(false);
  const [showIdModal, setShowIdModal] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const [inputType, setInputType] = React.useState('');
  const isSearchEnabled = userId.trim().length > 0;

  const handleSearch = () => {
    // Simula busca do usuário
    setUserName('teste');
    setSearched(true);
  };

  const handleChangePassword = () => {
    setInputType('password');
    setInputValue('');
    setShowPasswordModal(true);
  };

  const handleChangeId = () => {
    setInputType('id');
    setInputValue('');
    setShowIdModal(true);
  };

  const handleUnlock = () => {
    Alert.alert('Desbloqueado com sucesso');
  };

  const handleModalOk = () => {
    if (inputType === 'password') {
      // Aqui você pode tratar a nova senha: inputValue
      setShowPasswordModal(false);
    } else if (inputType === 'id') {
      // Aqui você pode tratar o novo ID: inputValue
      setShowIdModal(false);
    }
  };

  const handleModalCancel = () => {
    setShowPasswordModal(false);
    setShowIdModal(false);
  };

  return (
    <View style={styles.container}>
      {searched && (
        <Text style={styles.userName}>{userName}</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Digite o ID do usuário"
        value={userId}
        onChangeText={text => {
          setUserId(text);
          setSearched(false);
          setUserName('');
        }}
        autoCapitalize="none"
      />
      <View style={styles.buttonRow}>
        <Button
          title="Pesquisar usuário"
          onPress={handleSearch}
          disabled={!isSearchEnabled}
        />
      </View>
      <View style={styles.buttonRow}>
        <Button
          title="Alterar Senha"
          onPress={handleChangePassword}
          disabled={!searched}
        />
        <Button
          title="Alterar ID"
          onPress={handleChangeId}
          disabled={!searched}
        />
        <Button
          title="Desbloquear Conta"
          onPress={handleUnlock}
          disabled={!searched}
        />
      </View>
      {/* Modal para senha */}
      <Modal
        visible={showPasswordModal}
        transparent
        animationType="fade"
        onRequestClose={handleModalCancel}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Alterar Senha</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Digite a nova senha"
              placeholderTextColor="#aaa"
              value={inputValue}
              onChangeText={setInputValue}
              secureTextEntry
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={handleModalCancel} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleModalOk} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {/* Modal para ID */}
      <Modal
        visible={showIdModal}
        transparent
        animationType="fade"
        onRequestClose={handleModalCancel}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Alterar ID</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Digite o novo ID"
              placeholderTextColor="#aaa"
              value={inputValue}
              onChangeText={setInputValue}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={handleModalCancel} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleModalOk} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  userName: {
    fontSize: 18,
    marginBottom: 8,
    color: '#333',
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    backgroundColor: '#23242a',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 12,
    fontWeight: 'bold',
  },
  modalInput: {
    width: '100%',
    height: 44,
    borderColor: '#333',
    borderWidth: 1.5,
    borderRadius: 8,
    marginBottom: 18,
    paddingHorizontal: 12,
    color: '#fff',
    backgroundColor: '#181a20',
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  modalButtonText: {
    color: '#1e90ff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
