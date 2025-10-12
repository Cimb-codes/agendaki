import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
    console.log("🔹 Limpando dados antigos...");
    await prisma.itemAgendamento.deleteMany();
    await prisma.agendamento.deleteMany();
    await prisma.agenda.deleteMany();
    await prisma.servico.deleteMany();
    await prisma.usuario.deleteMany();
    await prisma.cliente.deleteMany();
    await prisma.empresa.deleteMany();
    await prisma.plano.deleteMany();

    console.log("🔹 Criando planos...");
    const planoBasico = await prisma.plano.create({
        data: {
            nome: "Básico",
            descricao: "Plano básico para testar funcionalidades",
            precoMensal: 49.90,
            limiteUsuarios: 5,
            limiteClientes: 50,
        },
    });

    const planoPro = await prisma.plano.create({
        data: {
            nome: "Profissional",
            descricao: "Plano completo para empresas",
            precoMensal: 99.90,
            limiteUsuarios: 20,
            limiteClientes: 200,
        },
    });

    console.log("🔹 Criando empresa...");
    const empresa = await prisma.empresa.create({
        data: {
            nome: "Barbearia do Ygor",
            email: "ygor@barbearia.com",
            telefone: "11999999999",
            planoId: planoPro.id,
        },
    });

    console.log("🔹 Criando usuários...");
    const senhaHash = await bcrypt.hash("123456", 10);

    const [ygor, fabio, carlos] = await Promise.all([
        prisma.usuario.create({
            data: { nome: "Ygor", email: "ygor@barbearia.com", senha: senhaHash, role: "admin", empresaId: empresa.id },
        }),
        prisma.usuario.create({
            data: { nome: "Fábio", email: "fabio@barbearia.com", senha: senhaHash, role: "funcionario", empresaId: empresa.id },
        }),
        prisma.usuario.create({
            data: { nome: "Carlos", email: "carlos@barbearia.com", senha: senhaHash, role: "funcionario", empresaId: empresa.id },
        }),
    ]);

    console.log("🔹 Criando agendas...");
    const [agendaYgor, agendaFabio, agendaCarlos] = await Promise.all([
        prisma.agenda.create({ data: { nome: "Agenda Ygor", empresaId: empresa.id } }),
        prisma.agenda.create({ data: { nome: "Agenda Fábio", empresaId: empresa.id } }),
        prisma.agenda.create({ data: { nome: "Agenda Carlos", empresaId: empresa.id } }),
    ]);

    console.log("🔹 Criando serviços...");
    const [corte, barba, sobrancelha] = await Promise.all([
        prisma.servico.create({ data: { nome: "Corte", duracaoMinutos: 30, preco: 30.0, empresaId: empresa.id } }),
        prisma.servico.create({ data: { nome: "Barba", duracaoMinutos: 20, preco: 20.0, empresaId: empresa.id } }),
        prisma.servico.create({ data: { nome: "Sobrancelha", duracaoMinutos: 15, preco: 15.0, empresaId: empresa.id } }),
    ]);

    console.log("🔹 Criando clientes...");
    const [cliente1, cliente2] = await Promise.all([
        prisma.cliente.create({ data: { nome: "Lucas", telefone: "11988888888", email: "lucas@email.com", empresaId: empresa.id } }),
        prisma.cliente.create({ data: { nome: "Mariana", telefone: "11977777777", email: "mariana@email.com", empresaId: empresa.id } }),
    ]);

    console.log("🔹 Criando agendamentos de exemplo...");
    const agendamento1 = await prisma.agendamento.create({
        data: {
            empresaId: empresa.id,
            clienteId: cliente1.id,
            agendaId: agendaYgor.id,
            dataHora: new Date(new Date().setHours(10, 0, 0)),
            status: "pendente",
            itens: {
                create: [
                    { servicoId: corte.id, quantidade: 1, precoUnitario: corte.preco },
                ],
            },
        },
    });

    const agendamento2 = await prisma.agendamento.create({
        data: {
            empresaId: empresa.id,
            clienteId: cliente2.id,
            agendaId: agendaFabio.id,
            dataHora: new Date(new Date().setHours(11, 0, 0)),
            status: "confirmado",
            itens: {
                create: [
                    { servicoId: barba.id, quantidade: 1, precoUnitario: barba.preco },
                    { servicoId: sobrancelha.id, quantidade: 1, precoUnitario: sobrancelha.preco },
                ],
            },
        },
    });

    console.log("✅ Seed concluído!");
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
