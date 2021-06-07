package com.suritec.models;

import javax.persistence.*;

@Entity
@Table(name = "telefone")
public class Telefone {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "tipo")
	private String tipo;

	@Column(name = "numero")
	private Integer numero;

	public Telefone() {

	}



}
