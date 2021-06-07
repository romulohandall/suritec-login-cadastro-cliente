package com.suritec.models;

import com.sun.tools.javac.jvm.Items;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "cliente")
public class Cliente {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "nome")
	private String nome;

	@Column(name = "cpf")
	private String cpf;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "id", referencedColumnName = "id")
	private Endereco endereco;

	@OneToMany(mappedBy="cliente")
	private Set<Telefone> telefones ;

	public Cliente() {

	}



}
