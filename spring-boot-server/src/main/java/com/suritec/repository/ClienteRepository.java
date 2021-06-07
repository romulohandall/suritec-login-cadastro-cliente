package com.suritec.repository;

import com.bezkoder.spring.datajpa.model.Tutorial;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
	List<Cliente> findByPublished(boolean published);
	List<Cliente> findByTitleContaining(String title);
}
