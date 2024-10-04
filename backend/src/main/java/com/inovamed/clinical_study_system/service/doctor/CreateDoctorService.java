package com.inovamed.clinical_study_system.service.doctor;

import com.inovamed.clinical_study_system.model.doctor.Doctor;
import com.inovamed.clinical_study_system.model.doctor.DoctorRequestDTO;
import com.inovamed.clinical_study_system.model.doctor.DoctorResponseDTO;
import com.inovamed.clinical_study_system.repository.DoctorRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class CreateDoctorService {
    @Autowired
    private DoctorRepository doctorRepository;

    public DoctorResponseDTO execute(DoctorRequestDTO doctorRequestDTO){
        Doctor doctor = new Doctor(doctorRequestDTO);
        return doctorRepository.save(doctor).toResponseDTO();
    };

}
