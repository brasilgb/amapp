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
        Schema::create('totals', function (Blueprint $table) {
            $table->string('id')->primary()->index();
            $table->foreignId('organization_id')->nullable()->constrained()->onDelete('cascade');
            $table->string('cnpj');
            $table->integer('filial');
            $table->string('datatu');
            $table->decimal('valdev', 15, 2);
            $table->decimal('valven', 15, 2);
            $table->decimal('margem', 15, 2);
            $table->decimal('permet', 15, 2);
            $table->decimal('projec', 15, 2);
            $table->decimal('valjur', 15, 2);
            $table->decimal('perjur', 15, 2);
            $table->decimal('valina', 15, 2);
            $table->decimal('perina', 15, 2);
            $table->decimal('valest', 15, 2);
            $table->decimal('valmeta', 15, 2);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->nullable()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('totals');
    }
};
