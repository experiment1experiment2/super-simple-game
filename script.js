body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
}

.container {
  max-width: 800px;
  margin: 20px auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.page {
  text-align: center;
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  margin: 10px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
}

.btn-primary {
  background-color: #3498db;
  color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.btn-secondary {
  background-color: #95a5a6;
  color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.timer {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #3498db;
}

.result {
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #e74c3c;
}

/* Styles for number buttons */
.number-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}

.number-buttons button {
  margin: 8px;
  padding: 14px;
  font-size: 16px;
  cursor: pointer;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 12px;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
}

.number-buttons button.selected {
  background-color: #2c3e50;
}

@media screen and (max-width: 600px) {
  .container {
    max-width: 90%;
  }

  .btn {
    padding: 12px 20px;
  }

  .number-buttons button {
    margin: 6px;
    padding: 12px;
  }
}
