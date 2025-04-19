
import React, { useState } from 'react';
import axios from 'axios'

const CowHealthForm = () => {
  const [form, setForm] = useState({
    cowId: '',
    cowName: '',
    healthStatus: '',
    symptoms: '',
    diagnosis: '',
    treatment: '',
    medication: [
      { medicineName: '', dosage: '', duration: '' }
    ],
    temperature: '',
    pulse: '',
    respiratoryRate: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleMedicationChange = (e, index) => {
    const { name, value } = e.target;
    const meds = [...form.medication];
    meds[index][name] = value;
    setForm({ ...form, medication: meds });
  };

  const addMedication = () => {
    setForm(prev => ({
      ...prev,
      medication: [...prev.medication, { medicineName: '', dosage: '', duration: '' }]
    }));
  };

  const removeMedication = (index) => {
    const meds = [...form.medication];
    meds.splice(index, 1);
    setForm({ ...form, medication: meds });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // console.log('Form Data:', form);

    try {
      const healthData = await axios.post("http://localhost:5000/av1/addhealth",form)
      console.log(healthData)
    } catch (error) {
      console.log(error)
    }



  };

  const renderFloatingInput = (label, name, type = 'text') => (
    <div className="form-floating mb-3">
      <input
        type={type}
        className="form-control"
        id={`floating-${name}`}
        placeholder={label}
        name={name}
        value={form[name]}
        onChange={handleChange}
      />
      <label htmlFor={`floating-${name}`}>{label}</label>
    </div>
  );

  return (
    <div className="container form-animate py-5 px-4 shadow-lg rounded bg-light">
      <h2 className="text-center mb-4 text-primary slide-in">🐄 Cow Health Form</h2>
      <form onSubmit={handleSubmit} className="row g-4 fade-in">
        <div className="col-md-6">{renderFloatingInput('Cow ID', 'cowId')}</div>
        <div className="col-md-6">{renderFloatingInput('Cow Name', 'cowName')}</div>

        <div className="col-md-6">
          <div className="form-floating mb-3">
            <select
              className="form-select"
              id="floating-healthStatus"
              name="healthStatus"
              value={form.healthStatus}
              onChange={handleChange}
            >
              <option value="">Select Health Status</option>
              <option value="healthy">Healthy</option>
              <option value="fregnecy">Pregnancy</option>
              <option value="injured">Injured</option>
            </select>
            <label htmlFor="floating-healthStatus">Health Status</label>
          </div>
        </div>
        <div className="col-md-6">{renderFloatingInput('Symptoms', 'symptoms')}</div>
        <div className="col-md-6">{renderFloatingInput('Diagnosis', 'diagnosis')}</div>
        <div className="col-md-6">{renderFloatingInput('Treatment', 'treatment')}</div>

        <div className="col-12">
          <h5 className="text-info slide-in">Medications 💊</h5>
          {form.medication.map((med, index) => (
            <div key={index} className="row g-2 mb-2 border p-3 rounded bg-white fade-in">
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Medicine Name"
                  name="medicineName"
                  value={med.medicineName}
                  onChange={(e) => handleMedicationChange(e, index)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Dosage"
                  name="dosage"
                  value={med.dosage}
                  onChange={(e) => handleMedicationChange(e, index)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Duration"
                  name="duration"
                  value={med.duration}
                  onChange={(e) => handleMedicationChange(e, index)}
                />
              </div>
              <div className="col-md-2">
                <button type="button" className="btn btn-outline-danger w-100" onClick={() => removeMedication(index)}>Remove</button>
              </div>
            </div>
          ))}
          <button type="button" className="btn btn-outline-primary mb-3" onClick={addMedication}>+ Add Medication</button>
        </div>

        <div className="col-md-4">{renderFloatingInput('Temperature', 'temperature')}</div>
        <div className="col-md-4">{renderFloatingInput('Pulse', 'pulse')}</div>
        <div className="col-md-4">{renderFloatingInput('Respiratory Rate', 'respiratoryRate')}</div>

        <div className="col-12">
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder="Description"
              id="floating-description"
              style={{ height: '100px' }}
              name="description"
              value={form.description}
              onChange={handleChange}
            ></textarea>
            <label htmlFor="floating-description">Description</label>
          </div>
        </div>

        <div className="col-12 text-center">
          <button type="submit" className="btn btn-success px-5 scale-in">Submit 🐮</button>
        </div>
      </form>
    </div>
  );
};

export default CowHealthForm;

