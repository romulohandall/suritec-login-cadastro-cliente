package com.suritec.models;

import javax.persistence.*;

@Entity
@Table(name = "endereco")
public class Endereco {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "cep")
	private Integer cep;

	@Column(name = "logradoro")
	private String logradoro;

	@Column(name = "bairro")
	private String bairro;

	@Column(name = "cidade")
	private String cidade;

	@Column(name = "uf")
	private String uf;



	public Endereco() {

	}





}
