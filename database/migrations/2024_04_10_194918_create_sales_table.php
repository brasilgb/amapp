<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sales', function (Blueprint $table) {
            $table->string('id')->primary()->index();
            $table->foreignId('organization_id')->nullable()->constrained()->onDelete('cascade');;
            $table->string('cnpj');
            $table->integer('filial');
            $table->string('descfilial');
            $table->string('dtvenda');
            $table->string('anomes');
            $table->decimal('valdevolucao', 15,2);
            $table->decimal('valvenda', 15,2);
            $table->decimal('valmeta', 15,2);
            $table->decimal('margem', 15,2);
            $table->decimal('representa', 15,4);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->nullable()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sales');
    }
};
