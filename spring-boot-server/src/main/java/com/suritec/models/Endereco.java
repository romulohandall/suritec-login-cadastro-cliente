package com.suritec.models;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "endereco")
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Endereco {

	@Id
	@Column(name = "idEndereco")
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

	@OneToOne(mappedBy = "endereco")
	private Cliente cliente;



}
